export class Task{
  name: string;
  complete: boolean;
  description: string;
  type: string;
  priority: string;

  constructor(name:string, description:string, type:string, priority:string, complete: boolean){
    this.name = name;
    this.description = description;
    this.type = type;
    this.priority = priority;
    this.complete = complete;
  }

}
