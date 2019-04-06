import { Component, OnInit } from '@angular/core';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-monthly',
  templateUrl: './task-monthly.component.html',
  styleUrls: ['./task-monthly.component.scss'],
})
export class TaskMonthlyComponent implements OnInit {

  constructor(
    public taskManager: TaskManagerService
   ) { }

  public tasks = new Array<Task>();

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
