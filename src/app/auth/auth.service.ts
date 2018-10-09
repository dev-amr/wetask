import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TaskService } from '../shared/task.service';

@Injectable()
export class AuthService {

  token: string;
  usrID: string;
  errorMsg: "somthing went wrong! Please try again..";

  constructor(private router: Router, private taskService: TaskService){}

  signupUser(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response =>{this.router.navigate(['/signin']);}
    )
    .catch(
      error => console.log(error)
    )
  }

  signinUser(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        //this.usrID = email;
        this.router.navigate(['/home']);
        //console.log(this.usrID);
        firebase.auth().currentUser.getIdToken()
          .then((token: string)=> this.token = token);
        this.usrID = firebase.auth().currentUser.uid;
        //console.log('user id: '+ this.usrID);
        }
      )
      .catch(
        error => {
          this.errorMsg = error.message;
          console.log(this.errorMsg);
        }
      );
  }

  getToken(){
    firebase.auth().currentUser.getIdToken().then((token: string)=> this.token = token);
    return this.token;
  }
  isAuthenticated(){
    return this.token != null;
  }
  logout(){
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
    this.usrID = null;
    this.taskService.emptyTasks();
    firebase.auth().signOut()
  }

}
