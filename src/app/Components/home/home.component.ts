import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/Services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  releases:any[];

  constructor(private spotifyclient : SpotifyApiService) { }
  
  ngOnInit(): void
  {
     this.spotifyclient.ObtenerUltimosLanzamientos().subscribe((data:any)=>
     {               
        this.releases= data.albums.items;
        console.log(this.releases);

     },function error (data)
     {
        this.releases= [];
     });

  }

}
