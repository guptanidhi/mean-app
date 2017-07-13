import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteLogo = "assets/favorite.jpg";
  heading: String = "Your Favorite List";
  movies: any;
  deleteIcon = "assets/delete.png";

  constructor(private favoriteService: FavoriteService) {
    this.getFavList();
  }

  ngOnInit() {
  }

  getFavList(){
    this.favoriteService.getFavList().subscribe(movies => {
      this.movies = movies;
    })
  }

  deleteMovie(event){
    var target = event.currentTarget;
    var selectedId = target.attributes.id.nodeValue;
    this.favoriteService.deleteMovie(selectedId, (response) => {
      this.movies = this.movies.filter((movie) => {
       return movie.id !== selectedId;
      });
      alert(response.message);
    });

  }
}
