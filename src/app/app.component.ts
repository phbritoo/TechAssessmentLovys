import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TechAssessmentLovys';
  isSignedIn = false;
  closedModal = false;
  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public firebaseService: FirebaseService
  ) {}
  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async onSignup() {
    await this.firebaseService.signup(
      this.signupForm.value.emailSignup,
      this.signupForm.value.passwordSignup
    );
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      alert('Registration Successful!');
    }
  }

  async onSignin() {
    await this.firebaseService.signin(
      this.signinForm.value.email,
      this.signinForm.value.password
    );
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
  }

  handleLogout() {
    this.isSignedIn = false;
  }

  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  signupForm = new FormGroup({
    emailSignup: new FormControl('', [Validators.required, Validators.email]),
    passwordSignup: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  get emailSignup() {
    return this.signinForm.get('emailSignup');
  }

  get passwordSignup() {
    return this.signinForm.get('passwordSignup');
  }

  // clicksub() {
  //   console.log(this.exform.value);
  //   this.exform.reset();
  // }
}
