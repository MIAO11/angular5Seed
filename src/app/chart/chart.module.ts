import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRouteModule } from './chart.router.module';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRouteModule
  ],

})
export class ChartModule { }
