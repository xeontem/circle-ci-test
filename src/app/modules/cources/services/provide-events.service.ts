import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Cource } from '../components/cources/cources.component';

type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>';

@Injectable()
export class ProvideEventsService {

  constructor(private afs: AngularFirestore) { }

  getList() {
    return this.afs.collection('cources');
  }

  getListByQuery(key: string, query: WhereFilterOp, value: string): AngularFirestoreCollection<Cource> {
    return this.afs.collection('cources', ref => ref.where(key, query, value));
  }

  addCource(newCource: Cource) {
    this.afs.collection('cources').add(newCource);
  }

  getItemById(id: string) {

  }

  updateItem() {

  }

  removeItem() {

  }
}
