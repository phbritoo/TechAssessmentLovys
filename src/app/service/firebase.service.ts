import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth) {}

  async signin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        (this.isLoggedIn = true),
          localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (
          errorCode == 'auth/user-not-found' ||
          errorCode == 'auth/invalid-email' ||
          errorCode == 'auth/wrong-password' ||
          errorCode == 'auth/credential-already-in-use'
        ) {
          alert('E-mail or password invalid!');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        (this.isLoggedIn = true),
          localStorage.setItem('user', JSON.stringify(res.user));
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
          alert('E-mail already exists');
          this.isLoggedIn = false;
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
