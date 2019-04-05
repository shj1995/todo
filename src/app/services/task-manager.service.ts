import { Injectable } from '@angular/core';
import { EntityManagerService } from './entity-manager.service';
import { Task } from '../models/task';
import { Platform } from '@ionic/angular';
import { FileManagerService } from './file-manager.service';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private taskList: Array<Task> = new Array<Task>();
  private entityManager: EntityManagerService<Task>;
  constructor(
    private fileManager: FileManagerService,
    private platform: Platform
  ) {
    this.entityManager = new EntityManagerService(fileManager, Task.typeName);
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
    return this.entityManager.list();
  }

  public listByDaily() {
    return this.taskList;
  }

  public listByMonthly() {
    return this.taskList;
  }

  public create(task: Task) {
    this.entityManager.create(task);
  }
  public update() {

  }
}
