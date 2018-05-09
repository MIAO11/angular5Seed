import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HttpService } from './provider/http/http.service';
import { homeService } from './provider/biz/homeService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;
  triggerTemplate = null;
  index;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  items;
  title = 'app';
  data = 'www.baidu.com';
  constructor(private httpService: HttpService, private homeservice: homeService) {
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

     this.homeservice.patientIndexInfo({}).subscribe((data: any) => {
        console.log(data);
        this.items = data.patientInfo;
     });
  }

  switch(index) {
    console.log(index);
    this.index = index;
    this.homeservice.patientIndexInfo({}).subscribe((data: any) => {
      console.log(data);
      this.items = data.patientInfo;
   });
  }


  
}
