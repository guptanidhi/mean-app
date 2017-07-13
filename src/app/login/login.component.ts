import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginLogo = "assets/login.png";
  option = {username :"", password: "" };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    var username = this.option.username;
    var password = this.option.password;
    this.loginService.login(username, password);
  }

}
