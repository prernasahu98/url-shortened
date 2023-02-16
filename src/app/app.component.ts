import { Component, OnInit } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shortened-url';
  model = {
    inputURL: ''
  };
  isFormSubmitted = false;
  shortUrl = 'https://www.google.com';
  isTextCopied = false;
  isLoading = false;

  constructor(private readonly google: GoogleApiService) { }

  ngOnInit() {

  }


}
