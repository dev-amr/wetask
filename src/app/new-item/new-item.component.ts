import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  usrText:'';
  showDetails=false;
  tasks: Task[];
  selectedTask:Task;
  removed:any;
  constructor(private taskService: TaskService, private dataStorage: DataStorageService) { }

  refresh(){
    this.dataStorage.fetshTasks();
    this.tasks = this.taskService.tasks;
    //console.log(this.tasks);
    }

  ngOnInit() {
    this.refresh();
  }


  onSave(): void {
    this.taskService.addTask(this.usrText,'','','', false);
    this.usrText = '';
    this.tasks = this.taskService.getTasks();
  }

  fetsh(){
    this.dataStorage.fetshTasks();
    this.refresh();
  }

  send(){
    this.dataStorage.storeTasks()
    .subscribe(
      (response: Response) =>{
        //console.log(response);
      }
    );
  }
  taskRemoved(){
    this.tasks = this.taskService.tasks;
  }



}
