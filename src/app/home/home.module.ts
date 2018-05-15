import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd/src/ng-zorro-antd.module';
import { AnalysisComponent } from './analysis/analysis.component';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
   
  ],

})
export class HomeModule { }
