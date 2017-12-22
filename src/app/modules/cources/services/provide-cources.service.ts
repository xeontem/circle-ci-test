import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Cource } from '../';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { firestore } from 'firebase/app/';

@Injectable()
export class ProvideCourcesService {
  static cources: Observable<Cource[]>;

  constructor(
    private http:Http,
    private afs: AngularFirestore
  ) {
    ProvideCourcesService.cources = this.getList().valueChanges();
   }

  getList(): AngularFirestoreCollection<Cource>  {
    return this.afs.collection('cources');
  }

  getListByQuery(key: firestore.FieldPath, query: firestore.WhereFilterOp, value: any): AngularFirestoreCollection<Cource> {
    return this.afs.collection('cources', (ref: firestore.CollectionReference): firestore.Query => ref.where(key, query, value));
  }

  addCource(newCource: Cource): void {
    this.afs.collection('cources').add(newCource);
  }

  updateCource(updatedCource: Cource): void {
    this.afs.collection('cources').doc(updatedCource.id).update(updatedCource);
  }

  getItemById(id: string) {
    return this.afs.collection('cources').doc(id);
  }

  removeItem(id: string): void {
    this.afs.collection('cources').doc(id).delete();
  }

  backup(): Observable<any> {
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/backupCources')
  }

  restore(): Observable<any> {
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/restoreCources')
  }

}
