import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HttpService } from './provider/http/http.service';
import { homeService } from './provider/biz/homeService';
import { CartoontodayComponent } from './cartoontoday/cartoontoday.component';
import { appRouting } from './app.router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CartoontodayComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    appRouting,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    HttpService,
    FormBuilder,
    homeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
