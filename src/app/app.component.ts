import { Component } from '@angular/core';

import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
  constructor() {

    var firebaseConfig = {
      apiKey: "AIzaSyCB_TBgeJXjUl5rUdsiH-p3OGHIFo6rok8",
      authDomain: "library-e91b8.firebaseapp.com",
      projectId: "library-e91b8",
      storageBucket: "library-e91b8.appspot.com",
      messagingSenderId: "401319320926",
      appId: "1:401319320926:web:95aa515aa0efb24e3503cf",
      measurementId: "G-W64SLQZ179"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
