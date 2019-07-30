import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesService } from './services/profiles.service';


@NgModule( {
  declarations: [
    AppComponent, ProfilesComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ ProfilesService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
