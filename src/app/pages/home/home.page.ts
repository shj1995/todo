import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TaskManagerService } from 'src/app/services/task-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabCounter = 0;
  tabEvent = 'task-daily';

  constructor(
    ) { }


  tabChanged(ev: {tab: string}) {
    this.tabCounter++;
    this.tabEvent = ev.tab;
  }
}
