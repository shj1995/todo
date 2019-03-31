import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { IonicModule } from '@ionic/angular';
import { TaskAllDoneComponent } from './components/task-all-done/task-all-done.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';

@NgModule({
  declarations: [
    TaskItemComponent,
    TaskAllDoneComponent,
    TaskHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TaskItemComponent,
    TaskAllDoneComponent,
    TaskHeaderComponent
  ]
})
export class TodoCommonModule { }
