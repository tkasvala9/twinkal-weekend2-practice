import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() { }
  today = new Date();
  numarray=[10,20,30];
}
