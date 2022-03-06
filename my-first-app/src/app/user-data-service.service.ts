import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() { }
  users={
    "firstname":'',
  "lastname":'',
  "phone":'',
  "email":''
  };
  sendData(users:any){
    this.users=users;
    console.log(this.users);
  }

}
