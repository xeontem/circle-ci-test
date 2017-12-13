import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Cource } from '../components/cources/cources.component';

type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>';

@Injectable()
export class ProvideCourcesService {
  courcesCount: number;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('cources').valueChanges()
      .subscribe(cources => this.courcesCount = cources.length)
   }

  getList() {
    return this.afs.collection('cources');
  }

  getListByQuery(key: string, query: WhereFilterOp, value: string): AngularFirestoreCollection<Cource> {
    return this.afs.collection('cources', ref => ref.where(key, query, value));
  }

  addCource(newCource: Cource) {
    this.afs.collection('cources').doc(newCource.id).set(newCource);
  }

  getItemById(id: string) {

  }

  updateItem() {

  }

  removeItem(cource: Cource) {
    console.log('catched delete event in cources service');
    this.afs.collection('cources').doc(cource.id).delete();
  }
}


// curl -X POST -H "Authorization: " -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "FCM Message",
//     "body": "This is an FCM Message",
//   },
//   "token": "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
// }' "https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send HTTP/1.1"
