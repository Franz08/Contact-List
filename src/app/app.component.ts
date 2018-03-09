import { Component } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; //added
import { Observable } from 'rxjs/Observable'; //added
import 'rxjs/add/operator/map'; //added

interface Contact {
	Address: string;
	Email: string;
	FirstName: string;
	LastName: string;
	Mobile: number;
	Phone: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //title = 'app';

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;

  Address:string;
	Email:string;
	FirstName:string;
	LastName:string;
	Mobile:number;
	Phone:number;

  constructor(private afs: AngularFirestore){

  }

  ngOnInit(){
  	this.contactsCol = this.afs.collection('Contacts');
  	this.contacts = this.contactsCol.valueChanges();
  }

  addContact(){
    this.afs.collection('Contacts').add({
      'Address': this.Address,
      'Email': this.Email,
      'FirstName': this.FirstName,
      'LastName': this.LastName,
      'Mobile': this.Mobile,
      'Phone': this.Phone
    });
  }
}
