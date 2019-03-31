import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { trigger, useAnimation, transition, state, style, animate } from '@angular/animations';
import { bounceOutRight } from 'ng-animate';

@Component({
  selector: 'app-task-daily',
  templateUrl: './task-daily.component.html',
  styleUrls: ['./task-daily.component.scss'],

  animations: [
  ]
})
export class TaskDailyComponent implements OnInit {

  constructor() { }

  tasks = new Array<Task>();

  ngOnInit() {
    let i = 0;
    for (i = 0; i < 1; i++) {
      this.tasks.push(new Task('事项' + i));
    }
  }
  done(task) {
    console.log(task);
    this.tasks.splice(this.tasks.findIndex(item => item.title === task.title) , 1);
  }
}
