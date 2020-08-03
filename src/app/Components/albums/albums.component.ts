import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService} from '../../Services/spotify-api.service'


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  idSpotify :string;
  albumData : any;

  constructor(private route: ActivatedRoute , private spotifyApi:SpotifyApiService)
  { 
    this.route.queryParams.subscribe(params => {
      this.idSpotify = params['id'];     
    });
    
  }

  ngOnInit(): void 
  {
    this.spotifyApi.ObtenerInformacionAlbumByid(this.idSpotify).subscribe(
      (response:any) => {
        this.albumData=response;
        console.log(this.albumData); 
      }
    );
    
    
  }

}
