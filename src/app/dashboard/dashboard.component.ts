import { Component, OnInit } from '@angular/core';
import { DashboardService} from '../dashboard.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heading: string;
  imagePath: string;
  movies: any;
  ratingImg: string;
  favIcon: string;
  favMovie;

  constructor(private moviesService: DashboardService, private favoriteService: FavoriteService) {
    this.heading = "Search Your Favorite Movie";
    this.imagePath  = "assets/movie.png";
    this.ratingImg = "assets/rating.jpg";
    this.favIcon = "assets/favorite.jpg";
  }

  ngOnInit() {
  }

  searchMovie(movieName){
    this.moviesService.getMovies(movieName).subscribe(movies => {
      this.movies = movies.results;
      console.log(this.movies);
    });
  }

  addToFav(event){
    var target = event.currentTarget;
    var selectedId = target.attributes.id.nodeValue;
    this.favMovie = this.movies.filter((movie) => {
     return movie.id == selectedId;
    });
    this.favoriteService.addToFav(this.favMovie[0]);
  }

}
