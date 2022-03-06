import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public us:UserDataServiceService) { }

  ngOnInit(): void {
  }

}
