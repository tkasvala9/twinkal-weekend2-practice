import { Component } from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  
  constructor(public ht:UserDataServiceService){}
  ngOnInit() {
    this.ht.getdata().subscribe((data)=>console.log(data));
  }
}