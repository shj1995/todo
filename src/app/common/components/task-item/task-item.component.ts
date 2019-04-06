import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Task } from 'src/app/models/task';
import { TaskViewComponent } from '../task-view/task-view.component';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
  ]
})
export class TaskItemComponent implements OnInit {


  constructor(private modalController: ModalController) { }

  @ViewChild('slid') slid: IonItemSliding;

  @Input() task: Task;
  @Output() click = new EventEmitter<String>();
  @Output() done = new EventEmitter<Task>();
  @Output() later = new EventEmitter<String>();

  ngOnInit() {
    console.log(this.slid);

  }
  emitDoneEvent() {
    this.done.emit(this.task);
  }

  follow(e: Event) {
    this.task.follow = !this.task.follow;
    e.stopPropagation();
  }

  async openViewModal() {
    const modal = await this.modalController.create({
      component: TaskViewComponent,
      componentProps: {
        task: this.task
      }
    });
    return await modal.present();
  }

}
