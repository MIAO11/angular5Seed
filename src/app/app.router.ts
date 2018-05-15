import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AnalysisComponent } from './home/analysis/analysis.component';

const routes: Routes = [
  // 以后在这里改动配置
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, 
  children: [ {path: 'dashboard/analysis', component: AnalysisComponent}]},

  { path: 'chart', loadChildren: 'app/chart/chart.module#ChartModule'}
];
// 将路由配置导出为 appRouting 以供调用, 子模块中的路由使用 forChild 而不是 forRoot
export const appRouting = RouterModule.forRoot(routes);
