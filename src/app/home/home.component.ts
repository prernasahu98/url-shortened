import { Component } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';
import { GoogleApiService, UserInfo } from '../google-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  model = {
    inputURL: ''
  };
  isFormSubmitted = false;
  shortUrl = 'https://www.google.com';
  isTextCopied = false;
  isLoading = false;

  userInfo?: UserInfo;

  constructor(private tinyUrlService: NgTinyUrlService,
    private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  ngOnInit() {

  }

  onSubmit(urlForm) {
    if (urlForm.valid) {
      this.isLoading = true;
      this.tinyUrlService.shorten(this.model.inputURL).subscribe(
        (data) => {
          this.shortUrl = data;
          this.isFormSubmitted = true;
          this.isLoading = false;
        },
        (error) => {
          alert('something went wrong. Please check your URL and try again.');
          this.isLoading = false;
        }
      )
    }
  }

  copyUrl(shortUrlElementRef) {
    let inputElement = document.createElement('input');

    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', shortUrlElementRef.innerHTML);

    inputElement.select();
    inputElement.setSelectionRange(0, 999999);

    try {
      navigator.clipboard.writeText(inputElement.value);
      this.isTextCopied = true;
      setTimeout(
        () => {
          this.isTextCopied = false;
        }, 2000)
    }
    catch (e) {
      console.log('error while copying..', e.toSting())
    }

  }

  reset() {
    this.model.inputURL = '';
    this.isFormSubmitted = false;
    this.isTextCopied = false;
  }

  isLoggedIn() {
    return this.googleApi.isLoggedIn();
  }

}
