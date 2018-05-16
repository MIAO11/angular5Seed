import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { NgZorroAntdModule, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
// 最新升级后，修改引入名称
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    FormsModule ,
    NgxEchartsModule,
    NgZorroAntdModule
  ],
  providers:[ { provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 }}]


})
export class HomeModule { }
