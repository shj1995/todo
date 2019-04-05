import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { Task } from 'src/app/models/task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {

  public task = new Task('');

  public date = new Date().toISOString();
  constructor(
    public modalController: ModalController,
    public taskManager: TaskManagerService
  ) { }

  ngOnInit() {
    console.log(new Date());
  }

  close() {
    this.modalController.dismiss();
  }
  add() {
    this.task.date = new Date(this.date);
    this.taskManager.create(this.task);
    this.close();
  }
}
