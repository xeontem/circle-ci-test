import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Cource } from '../';
import { Observable } from 'rxjs/Observable';

type WhereFilterOp = '<' | '<=' | '==' | '>=' | '>';

@Injectable()
export class ProvideCourcesService {
  courcesCount: number;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('cources').valueChanges()
      .subscribe(cources => this.courcesCount = cources.length)
   }

  getList(): AngularFirestoreCollection<Cource>  {
    return this.afs.collection('cources');
  }

  getListByQuery(key: string, query: WhereFilterOp, value: string): AngularFirestoreCollection<Cource> {
    return this.afs.collection('cources', ref => ref.where(key, query, value));
  }

  addCource(newCource: Cource) {
    this.afs.collection('cources').doc(newCource.id).set(newCource);
  }

  updateCource(updatedCource: Cource) {
    this.afs.collection('cources').doc(updatedCource.id).update(updatedCource);
  }

  getItemById(id: string) {

  }

  updateItem() {

  }

  removeItem(cource: Cource) {
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
