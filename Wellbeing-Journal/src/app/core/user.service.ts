import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { IonItem } from '@ionic/angular';

@Injectable()
export class UserService {

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ) {
 }


  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().onAuthStateChanged((u) => {
        if (u) {
          resolve(u);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name
      }).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
}