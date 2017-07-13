import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }

  login(username, password){
    let data = new URLSearchParams();
    data.append('email', username);
    data.append('password', password);

    this.http
    .post('/api/login', data)
      .subscribe(data => {
        var response = data.json();
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
        alert(response.message);
      }, error => {
        var response = error.json();
        alert(response.message);
      });
  }
}
