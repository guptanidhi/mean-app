import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  heading = "Movie Search Portal";
  imagePath = "assets/movie.png";
  subheading = "Please Login to Search your Favourite Movies...";

  constructor() { }

  ngOnInit() {
  }

}
