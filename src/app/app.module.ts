import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {SpotifyApiService} from '../app/Services/spotify-api.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SpotifyCardComponent } from './Components/spotify-card/spotify-card.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { SearchArtistComponent } from './Components/search-artist/search-artist.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import {MiliSeconsToMinutes} from '../app/pipes/timePipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SpotifyCardComponent,
    ArtistComponent,
    SearchArtistComponent,
    AlbumsComponent,
    MiliSeconsToMinutes
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
