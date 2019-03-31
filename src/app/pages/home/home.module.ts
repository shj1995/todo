import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TaskDailyComponent } from './task-daily/task-daily.component';
import { TaskWeeklyComponent } from './task-weekly/task-weekly.component';
import { TodoCommonModule } from 'src/app/common/todo-common.module';
import { TaskMonthlyComponent } from './task-monthly/task-monthly.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'task-daily',
            pathMatch: 'full'
          },
          {
            path: 'task-daily',
            component: TaskDailyComponent
          },
          {
            path: 'task-weekly',
            component: TaskWeeklyComponent
          },
          {
            path: 'task-monthly',
            component: TaskMonthlyComponent
          }

        ]
      }
    ])
  ],
  declarations: [
    HomePage,
    TaskDailyComponent,
    TaskWeeklyComponent,
    TaskMonthlyComponent
  ]
})
export class HomePageModule {}
