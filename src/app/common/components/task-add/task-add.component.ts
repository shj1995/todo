import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskManagerService } from 'src/app/services/task-manager.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {

  private task: Task;

  constructor(
    public modalController: ModalController,
    // public taskManager: TaskManagerService
  ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
  add(){
    // this.taskManager.create(this.task);
  }
}
