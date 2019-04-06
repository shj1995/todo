import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {

  @Input() task: Task;
  constructor(
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
    ) { }

  ngOnInit() {
    console.log(this.task);
  }

  close() {
    this.modalController.dismiss();
  }
  async deleteAlert() {
    const actionSheet = await this.actionSheetController.create({
      header: '是否删除',
      buttons: [{
        text: '删除',
        role: 'destructive',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
