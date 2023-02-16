import { Component } from '@angular/core';
import { GoogleApiService } from '../google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private readonly googleApi: GoogleApiService) { }

  isLoggedIn() {
    return this.googleApi.isLoggedIn();
  }

  logOut() {
    this.googleApi.signOut();
  }

}
