import { Component } from '@angular/core';
import { UserDataServiceService } from './user-data-service.service';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  
  constructor(public ht:UserDataServiceService,public http:HttpClient,public fb:FormBuilder){}
  ngOnInit() {
    this.ht.getdata().subscribe((data)=>console.log(data));
    this.myForm = this.fb.group({
      name: ["James", Validators.required],
      email: ['james@mail.com', [Validators.required, Validators.email]],
      message: ['This  messsage is loooooooong', [Validators.required, Validators.minLength(15)]],
    })
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.ht.sendpost(this.myForm.value).subscribe((data => console.log(data)));
  }

  updateData() {
    console.log(this.myForm.value)
  }

}