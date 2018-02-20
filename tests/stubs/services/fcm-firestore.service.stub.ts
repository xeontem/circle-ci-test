export class AngularFirestoreStub {
  collection = () => ({ valueChanges: () => ({ subscribe: () => {}}) });
  getList() {}
}
