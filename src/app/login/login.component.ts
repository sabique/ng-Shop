import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private agAuth: AngularFireAuth) { }

  login(){
    this.agAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
