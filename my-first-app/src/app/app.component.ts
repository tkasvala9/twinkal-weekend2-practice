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
  numarray:any=[]
  t:any;
  i:any;
  cratetable(value:any){
    
    for(let i=1;i<=10;i++){
      this.t=(value*i);
      this.numarray[i]=value +" "+"*"+" "+i+" "+"="+" "+this.t;
      console.log(this.numarray[i]);
        }
        
  }
}
