import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private dataStorage: DataStorageService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "Your Key",
      authDomain: "your domain",
      databaseURL: "your URL",
      projectId: "your project ID",
      storageBucket: "xxx",
      messagingSenderId: "xxx"
    });

    this.dataStorage.fetshTasks();
  }

}
