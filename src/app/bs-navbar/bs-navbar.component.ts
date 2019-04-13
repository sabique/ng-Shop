import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(response => console.log(response));
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
