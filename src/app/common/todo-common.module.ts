import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { IonicModule } from '@ionic/angular';
import { TaskAllDoneComponent } from './components/task-all-done/task-all-done.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskManagerService } from '../services/task-manager.service';
import { FileManagerService } from '../services/file-manager.service';
import { EntityManagerService } from '../services/entity-manager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskItemComponent,
    TaskAllDoneComponent,
    TaskHeaderComponent,
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TaskItemComponent,
    TaskAllDoneComponent,
    TaskHeaderComponent,
    TaskAddComponent
  ],
  entryComponents: [
    TaskAddComponent
  ],
  providers: [
  ]
})
export class TodoCommonModule { }
