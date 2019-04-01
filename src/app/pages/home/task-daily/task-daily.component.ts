import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/models/task";
import { trigger, useAnimation, transition, state, style, animate } from '@angular/animations';
import { bounceOutRight } from 'ng-animate';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-task-daily',
  templateUrl: './task-daily.component.html',
  styleUrls: ['./task-daily.component.scss'],

  animations: [
  ]
})
export class TaskDailyComponent implements OnInit {

  constructor(
    public taskManager: TaskManagerService
   ) { }

  public tasks = new Array<Task>();

  ngOnInit() {
    // console.log(this.taskManager);
    // this.tasks = this.taskManager.listAll();
  }
  done(task) {
    this.tasks.splice(this.tasks.findIndex(item => item.title === task.title) , 1);
  }
}
