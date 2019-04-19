import { Injectable } from '@angular/core';
import { EntityManagerService } from './entity-manager.service';
import { Task } from '../models/task';
import { Platform } from '@ionic/angular';
import { FileManagerService } from './file-manager.service';
import {  Dayjs } from 'dayjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  // private taskListSubject = new Subject<Array<Task>>();
  private taskList = new Array<Task>();
  private taskListDaily = new Array<Task>();
  private taskListMonthly = new Array<Task>();

  // private taskListSubject = new Subject<Array<Task>>();
  // private taskListDailySubject = new Subject<Array<Task>>();
  // private taskListMonthlySubject = new Subject<Array<Task>>();

  private entityManager: EntityManagerService<Task>;
  constructor(
    private fileManager: FileManagerService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {

      this.entityManager = new EntityManagerService(this.fileManager, Task.typeName);
      this.taskList = this.entityManager.list();
      this.entityManager.getEntityListSubject().subscribe(entityList => {
        this.taskList = entityList;
        // this.taskListSubject.next(this.taskList);
        // const taskListDaily = new Array<Task>();
        // console.log(this.taskList);
        // entityList.forEach(item => {
        //   console.log(Dayjs);
        // });
        // this.taskListDaily.next(taskListDaily);
      });
    });
  }

  private done(id: string) {
    const task = this.getById(id);
    task.done = true;
  }

  public getById(entityId: string): Task {
    let task: Task = null;
    this.taskList.forEach(item => {
      if (item.id === entityId) {
        task = item;
      }
    });
    return task;
  }

  public listAll() {
    return this.taskList;
  }

  public listByDaily() {
    return this.taskListDaily;
  }

  public listByMonthly() {
    return this.taskListMonthly;
  }

  public create(task: Task) {
    this.entityManager.create(task);
  }
  public update() {

  }
}
