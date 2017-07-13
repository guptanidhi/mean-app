import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {

  constructor(private http: Http, private router: Router) { }

  register(fname, lname, email, password){
    let data = new URLSearchParams();
    data.append('fname', fname);
    data.append('lname', lname);
    data.append('email', email);
    data.append('password', password);

    this.http
    .post('/api/register', data)
      .subscribe(data => {
        var response = data.json();
        this.router.navigate(['/login']);
        alert(response.message);
      }, error => {
        var response = error.json();
        alert(response.message);
      });
  }
}
