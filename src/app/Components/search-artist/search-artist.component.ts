import { Component, OnInit } from '@angular/core';
import {SpotifyApiService } from '../../Services/spotify-api.service'

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {

  dataBusqueda:any[]=[];
  parametrosbusqueda:string;

  constructor(private  SpotifyApi : SpotifyApiService) { }

  ngOnInit(): void {
  }

  Busqueda(parametroBusqueda:string)
  {  
    if(parametroBusqueda)
    {
      this.SpotifyApi.BuscarArtista(parametroBusqueda).subscribe(
        (response:any)=>
        {
          this.dataBusqueda=response;
        });
    }
    else
    {
      this.dataBusqueda=[];
    }
    
  }

}
