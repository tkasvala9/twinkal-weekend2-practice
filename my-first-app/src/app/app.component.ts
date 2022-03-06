import { Component } from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  
  constructor(public us:UserDataServiceService){}
  users = {
    
    "password": '',
    "email": ''
  }
  onsubmitofform(users: any) {
    this.users = users;
    // this.us.sendData(this.users);
    this.us.users = users;
    console.log(this.us.users);
  }
}
