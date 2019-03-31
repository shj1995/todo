import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
})
export class TaskHeaderComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  openMenu() {
    console.log('ss');
    this.menu.open('menu');
  }
}
