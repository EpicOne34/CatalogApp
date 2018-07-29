import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat/Observable'
import { map } from "rxjs/operators";

import { User } from '../models/Users';

@Injectable()
export class UsersService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('Users');
  }

  getUsers(): Observable<User[]> {
    // Get Users with the id...
    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.users;
  }
}