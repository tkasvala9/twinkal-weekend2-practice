import { Component } from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  getdate:any;
  getarray:any;
  constructor(public us:UserDataServiceService){
    this.getdate=this.us.today;
    this.getarray=this.us.numarray;
  }
}
