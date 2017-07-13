import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { RegistrationService } from './registration.service';
import { LoginService } from './login.service';
import { DashboardService } from './dashboard.service';
import { FavoriteService } from './favorite.service';


// Define the routes
const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [RegistrationService, LoginService, DashboardService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
