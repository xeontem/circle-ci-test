const collectionReturn = {
  valueChanges: func => ({
    subscribe: val => val
  })
};

export class AngularFirestoreStub {
  collection = (key, func) => collectionReturn;
}
