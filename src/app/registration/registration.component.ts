import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerLogo = "assets/register.jpg";
  option = {firstname :"", lastname: "", email:"", password:"" };

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  register(){
    var fname = this.option.firstname;
    var lname = this.option.lastname;
    var email = this.option.email;
    var password = this.option.password;
    this.registrationService.register(fname, lname, email, password);
  }
}
