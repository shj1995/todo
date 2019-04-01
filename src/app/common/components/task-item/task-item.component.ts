import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Task } from 'src/app/models/task';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
  ]
})
export class TaskItemComponent implements OnInit {


  constructor() { }

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
  stoProp(e) {
    e.stopPropagation();
    console.log(e);
  }

}
