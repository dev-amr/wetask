import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  allT: Task[];
  work: Task[];
  personal: Task[];
  shopping: Task[];
  ngOnInit() {
    this.allT = this.taskService.allTasks();
    this.work = this.taskService.workTasks();
    this.personal = this.taskService.personalTasks();
    this.shopping = this.taskService.shoppingTasks();

  }

  getWorkTasks(){
    this.taskService.workTasks();
  }
}
