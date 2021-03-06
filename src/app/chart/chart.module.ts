import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRouteModule } from './chart.router.module';
import { NgZorroAntdModule } from 'ng-zorro-antd/src/ng-zorro-antd.module';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRouteModule,
  ],

})
export class ChartModule { }
