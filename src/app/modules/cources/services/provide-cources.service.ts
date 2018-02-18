import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as fromCources from '../reducers/cources.reducer';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { firestore } from 'firebase/app';
import { Store } from '@ngrx/store';
import { SetCources } from '../actions/cources.action';

@Injectable()
export class ProvideCourcesService {
  // static cources: Observable<Cource[]>;

  constructor(
    private http:  HttpClient,
    private afs:   AngularFirestore,
    private store: Store<fromCources.State>
  ) {
    this.getList().valueChanges().subscribe(cources => {
      this.store.dispatch(new SetCources(cources));
    });
    // ProvideCourcesService.cources = this.getList().valueChanges();
  }

  getList(): AngularFirestoreCollection<fromCources.Cource>  {
    return this.afs.collection('cources');
  }

  getListByQuery(key: firestore.FieldPath, query: firestore.WhereFilterOp, value: any): AngularFirestoreCollection<fromCources.Cource> {
    return this.afs.collection('cources', (ref: firestore.CollectionReference): firestore.Query => ref.where(key, query, value));
  }

  addCource(newCource: fromCources.Cource): void {
    this.afs.collection('cources').add(newCource);
  }

  updateCource(updatedCource: fromCources.Cource): void {
    this.afs.collection('cources').doc(updatedCource.id).update(updatedCource);
  }

  getItemById(id: string) {
    return this.afs.collection('cources').doc(id);
  }

  removeItem(id: string): void {
    this.afs.collection('cources').doc(id).delete();
  }

  backup(): Observable<any> {
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/backupCources');
  }

  restore(): Observable<any> {
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/restoreCources');
  }

}
