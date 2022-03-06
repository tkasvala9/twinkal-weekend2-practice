import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor( public ht:HttpClient) { }
  getdata() {
    return this.ht.get("http://localhost:3000/posts");
  }
  
}
