import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  tasks= this.taskService.tasks;
  tasksType: string;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{this.tasksType = params['type'];}
    );
  }

  filterItemsOfType(tasksType){
    if(this.tasks){
      return this.tasks.filter(x => x.type == tasksType);}
  }


}
