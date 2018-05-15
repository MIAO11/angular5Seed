import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ChartComponent,
    children: [

    ]
  }
];

@NgModule({
  imports:
   [
    CommonModule, //注意这里引入的CommonModule，它的作用后面会专门讲到，这里不引入的话页面会报错
    RouterModule.forChild(ROUTES)
  ],
  exports: [
      RouterModule
    ],
  providers: []
})
export class ChartRouteModule { }
