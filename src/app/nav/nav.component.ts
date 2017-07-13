import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<div style="text-align: right;margin-right: 10px;margin-top:10px;" [innerHtml]="template"></div>`,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token: any;
  template: string;

  constructor() {
    this.token = localStorage.getItem('token');
    if(this.token != null){
      this.template = `
        <a href="/dashboard" style="padding:5px;">Dashboard</a>
        <a href="favorite" style="padding:5px;">Favorite</a>
        <a href="logout" style="padding:5px;">Logout</a>
      `
    }else{
      this.template = `
        <a href="/" style="padding:5px;">Home</a>
        <a href="register" style="padding:5px;">Register</a>
        <a href="login" style="padding:5px;">Login</a>
      `
    }
  }

  ngOnInit() {
  }

}
