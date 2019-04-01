import { Injectable } from '@angular/core';
import { EntityManagerService } from './entity-manager.service';
import { Task } from '../models/task';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private taskList: Array<Task> = new Array<Task>();

  constructor(
    public entityManager: EntityManagerService,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {

      this.entityManager.list<Task>(Task.typeName).subscribe(result => {
        this.taskList = result;
      });
    });
  }

  private done(id: string) {
    let task = this.getById(id);
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
    return this.taskList;
  }

  public listByMonthly() {
    return this.taskList;
  }

  public create(task: Task) {
    this.taskList.push(task);
  }
  public update() {

  }
}
