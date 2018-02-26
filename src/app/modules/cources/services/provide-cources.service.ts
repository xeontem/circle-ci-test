import { Store } from '@ngrx/store';
import { firestore } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { SetCources } from '../actions/cources.action';
import { State, Cource } from '../reducers';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ProvideCourcesService {

  constructor(
    private http:  HttpClient,
    private afs:   AngularFirestore,
    private store: Store<State>
  ) {
    this.getList().valueChanges().subscribe(cources => {
      this.store.dispatch(new SetCources(cources));
    });
  }

  getList(): AngularFirestoreCollection<Cource>  {
    return this.afs.collection('cources');
  }

  getListByQuery(key: firestore.FieldPath, query: firestore.WhereFilterOp, value: any): AngularFirestoreCollection<Cource> {
    return this.afs.collection('cources', (ref: firestore.CollectionReference): firestore.Query => ref.where(key, query, value));
  }

  addCource(newCource: Cource): Promise<firestore.DocumentReference> {
    return this.afs.collection('cources').add(newCource);
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
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/backupCources');
  }

  restore(): Observable<any> {
    return this.http.get('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/restoreCources');
  }

}
