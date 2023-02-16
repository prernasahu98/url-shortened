import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { NgTinyUrlModule } from 'ng-tiny-url';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
// import { OAuthModule } from 'angular-oauth2-oidc';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgTinyUrlModule,
    HttpClientModule,
    OAuthModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
