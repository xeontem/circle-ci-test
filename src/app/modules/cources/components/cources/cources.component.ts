import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cond } from '../../../../shared/lambda';
// import 'rxjs/add/operator/map';
export interface Cource {
  id: string;
  title: string;
  duration: string;
  date: Date;
  description: string;
}
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit {
  // courcesCollection: AngularFirestoreCollection<Cource>;
  cources:           Observable<Array<{}>>;// TODO Observable<Cources[]>
  searchCourceForm:  FormGroup;
  hint:              string = 'title of cource';

  constructor(
    private afs: AngularFirestore,
    private fb:  FormBuilder
  ) { }

  ngOnInit() {
    // recieve collection from firestore
    // this.courcesCollection = this.afs.collection('cources');
    this.cources = this.afs.collection('cources').valueChanges();

    // search cource form
    this.searchCourceForm = this.fb.group({
      predicate: ['', Validators.required]
    });
  }

  searchCource(val: string): void {
    this.cources = cond(val)
      (this.afs.collection('cources', ref => ref.where('title', '==', val)))
      (this.afs.collection('cources')).valueChanges();
  }

  deletedEventHandler(id: string): void {
    console.log(id);
  }

  editedEventHandler(cource: Cource): void {
    console.log(cource);
  }

}
