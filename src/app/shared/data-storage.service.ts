import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TaskService } from './task.service';
import { Task } from './task.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  tasks: Task[];

  constructor(private http: Http, private taskService: TaskService, private authService: AuthService) { }

  fetshTasks(){
    if(this.authService.isAuthenticated()){
    const token = this.authService.getToken();
    const usrID = this.authService.usrID;
    this.http.get('https://wetask-c5ab9.firebaseio.com/'+usrID+'.json?auth='+ token)
    .subscribe(
      (res : Response) => {
        const data = res.json();
        this.tasks = data;
        this.taskService.setTasks(this.tasks);
      })
      if(this.tasks)this.taskService.tasks = this.tasks;
      }
    }

  storeTasks(){
      if(this.authService.isAuthenticated()){
      const token = this.authService.getToken();
      const usrID = this.authService.usrID;
      return this.http.put('https://wetask-c5ab9.firebaseio.com/'+usrID+'.json?auth=' + token, this.taskService.getTasks());
      }
    }
  // storeTask(task){
  //   return this.http.put('https://wetask-c5ab9.firebaseio.com/tasks.json', task);
  // }

  emptyTasks(){
    this.tasks = [];
    this.taskService.emptyTasks();
  }

}
