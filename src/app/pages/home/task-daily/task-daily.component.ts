import { Component, OnInit } from '@angular/core';
import { trigger, useAnimation, transition, state, style, animate } from '@angular/animations';
import { bounceOutRight } from 'ng-animate';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { Task } from 'src/app/models/task';

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

  public tasks: Array<Task>;

  ngOnInit() {
    this.tasks = this.taskManager.listAll();
    // this.taskManager.listAllSubject().subscribe( taskList => {
    //     this.tasks = taskList;
    //   }
    // );
  }
  done(task) {
    this.tasks.splice(this.tasks.findIndex(item => item.id === task.id) , 1);
  }
}
