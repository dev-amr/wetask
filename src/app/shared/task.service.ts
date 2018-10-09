import { Task } from './task.model';
import { EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';


export class TaskService{
  indexSelected = new EventEmitter<number>();
  taskSelected = new EventEmitter<Task>();
  tasks: Task[];


  setTasks(tasks: Task[]){
    this.tasks = tasks;
    //console.log(this.tasks);
  }

  getTasks(){
    if(this.tasks)
    return this.tasks.slice();
  }

//on addTask user add new task by only the name!
  addTask(name: string, desc: string, type: string, priority: string, complete: boolean){
    let task = new Task(name, desc, type, priority, complete);
    if(this.tasks){
      this.tasks.unshift(task);
    }else{
      this.tasks= [];
      this.tasks.push(task);
    }

  }

// general function
  remove(array, element) {
   return array.filter(e => e.name !== element);
 }

  removeTask(elem){
    this.tasks = this.tasks.filter((task)=>task !== elem);

  }

  updateTask(task: Task, index: number){
    this.tasks[index] = task;
    //console.log(this.tasks);
    //this.router.navigate(['/']);
  }

/////////////////////
  workTasks(){
    const work: Task[]=[];
    for (let task of this.tasks){
      if(task.type == 'work'){
        work.push(task);
      }
    };
    return work;
  }

  personalTasks(){
    const personal: Task[]=[];
    for (let task of this.tasks){
      if(task.type == 'personal'){
        personal.push(task);
      }
    };
    return personal;
  }

  shoppingTasks(){
    const shopping: Task[]=[];
    for (let task of this.tasks){
      if(task.type == 'shopping'){
        shopping.push(task);
      }
    };
    return shopping;
  }
  allTasks(){
    return this.tasks;
  }

  emptyTasks(){
    this.tasks = [];
  }


}
