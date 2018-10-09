import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../shared/task.model';
import { TaskService } from '../../../shared/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  selectedTask;
  @Input() parentTask:Task;
  @Input() parentIndex:number;
  @ViewChild('f') taskDetailsForm: NgForm;
  @Output() detailsCanceled = new EventEmitter<any>();

  constructor(private taskService: TaskService) { }


  ngOnInit() {
    // this.taskService.taskSelected.subscribe(
    //   (task: Task) =>{
    //     this.selectedTask = task;
    //     console.log('this is subscription'task);
    //   });
  }

  onEdit(form: NgForm){
    //console.log(this.parentIndex);
    //console.log(form.value);
    const updatedItem = form.value;
    //console.log(form.value);
    this.taskService.updateTask(updatedItem, this.parentIndex);
    this.detailsCanceled.emit();
  }

  onCancel(){
    //this.taskDetailsForm.reset();
    //this.parentTask = !this.parentTask;
    this.detailsCanceled.emit();
  }

}
