import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../shared/task.model';
import { TaskService } from '../../shared/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  selectTaskOnView;
  @Input() task: Task;
  @Input() index: number;
  @Output() taskRemoved= new EventEmitter<any>();

  constructor(private taskService: TaskService) { }


  ngOnInit() {
    //this.tasks = this.taskService.removeTask();
  }


  onComplete(t){
    t.complete = !t.complete;
    this.taskService.updateTask(t, this.index);
  }

  removeDetails(){
    this.selectTaskOnView = !this.selectTaskOnView;
  }

  onSelected(t){
    //console.log(this.index);
    if(this.selectTaskOnView == t){
    this.selectTaskOnView = !this.selectTaskOnView;
  }else{
    this.taskService.taskSelected.emit(t);
    this.taskService.indexSelected.emit(this.index);
    this.selectTaskOnView = t;
  }

  }

  onRemove(t): void{
    this.taskService.removeTask(t);
    this.taskRemoved.emit();
    //console.log(t);
  }



}
