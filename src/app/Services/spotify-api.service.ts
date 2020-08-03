import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SpotifyApiService {
  constructor(private httpClient: HttpClient) 
  { 
            
  }

  private baseURL:string ='https://api.spotify.com/v1/'; 
  private token:string="BQBVnNjdommP4V5DuoWdQEFLpZQL-l4X3h6nFUm8PE6TfYKfrYQk_maMjSNpY8G4cJq5d-bWZBnNYaUGfKpUb_Xas6jHbVMk14RuB0ihZLY618cxe4dUOutaicYtyd2f0GsTviecpt4";
  
  ObtenerUltimosLanzamientos():Observable<any>
  {
        
    var peticion = this.httpClient
                  .get(this.baseURL+"browse/new-releases?country=CO&limit=20&offset=0",
                    {headers:new HttpHeaders({'Authorization':`Bearer ${this.token}`})});
    
    return peticion;
   
  } 
  
  ObtenerInformacionAlbumByid(idSpotify:string ):Observable<any>
  {
        
    var peticion = this.httpClient
                  .get(this.baseURL+`albums/${idSpotify}?&limit=10&market=CO`,
                    {headers:new HttpHeaders({'Authorization':`Bearer ${this.token}`})});
    
    return peticion;
   
  } 
  
  BuscarArtista(nombreArtista:string)
  {
    var peticion = this.httpClient
    .get(this.baseURL+`search?q=${nombreArtista}&type=track&market=CO&limit=10&offset=0`,
      {headers:new HttpHeaders({'Authorization':`Bearer ${this.token}`})});
    return peticion;
  }
}
