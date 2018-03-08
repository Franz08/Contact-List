import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2'; //added
import { AngularFirestoreModule } from 'angularfire2/firestore'; //added

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
	apiKey: "AIzaSyDINrv7WVK0-IVSjKj-Ndx5gbM4fU8Hn0o",
    authDomain: "firestore-5534b.firebaseapp.com",
    databaseURL: "https://firestore-5534b.firebaseio.com",
    projectId: "firestore-5534b",
    storageBucket: "firestore-5534b.appspot.com",
    messagingSenderId: "740150838306"
    } // added

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    AngularFireModule.initializeApp(firebaseConfig), // added
    AngularFirestoreModule, // added
    FormsModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
