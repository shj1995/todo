import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
