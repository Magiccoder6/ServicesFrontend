import { Component, OnInit } from '@angular/core';
import { HttpService } from '../_services/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _http:HttpService) { }

  ngOnInit(): void {
  }

  get getYear():string{
    return (new Date()).getFullYear().toString()
  }

}
