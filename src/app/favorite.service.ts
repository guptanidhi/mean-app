import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoriteService {

  constructor(private http: Http) { }

  addToFav(movie){
    let data = new URLSearchParams();
    data.append('id', movie.id);
    data.append('title', movie.title);
    data.append('vote_average', movie.vote_average);
    data.append('poster_path', movie.poster_path);

    this.http
    .post('/api/addToFav', data)
      .subscribe(data => {
        var response = data.json();
        alert(response.message);
      }, error => {
        var response = error.json();
        alert(response.message);
      });
  }

  getFavList(){
    return this.http.get('/api/getFavList')
    .map(res => res.json());
  }

  deleteMovie(movieId, callback){
    let body = {
      id: movieId
    };
    var obj = {id: movieId};
    let options = new RequestOptions({
       body: obj
    })
    this.http
    .delete('/api/deleteMovie', options)
    .subscribe(data => {
      var response = data.json();
      callback(response);
    }, error => {
      var response = error.json();
      alert(response.message);
    });
  }

}
