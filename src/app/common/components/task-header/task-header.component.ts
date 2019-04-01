import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { TaskAddComponent } from '../task-add/task-add.component';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent implements OnInit {

  constructor(
    public menu: MenuController,
    public modalController: ModalController
    ) { }

  @Input() public leftOptionIcon: '';

  @Output() public leftOptionEvent = new EventEmitter();

  @Input() public rightOptionIcon: '';

  @Output() public rightOptionEvent = new EventEmitter();

  @Input() public showAdd = true;

  @Input() public showNotice = true;

  @Input() public showSearch = false;


  ngOnInit() {}

  emitOptionEvent(event: EventEmitter<any>) {
    event.emit();
  }

  openMenu() {
    console.log('ss');
    this.menu.open('menu');
  }
  async openAdd() {
    const modal = await this.modalController.create({
      component: TaskAddComponent
    });
    return await modal.present();
  }
}
