import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/Components/home/home.component';
import {AlbumsComponent} from '../app/Components/albums/albums.component';
import {SearchArtistComponent} from '../app/Components/search-artist/search-artist.component';

const routes: Routes = 
[
  { path:"home",component:HomeComponent},
  { path:"album",component:AlbumsComponent},
  { path:"search",component:SearchArtistComponent} , 
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
