import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SpotifyApiService {
  constructor(private httpClient: HttpClient) 
  { 
            
  }

  private headers :HttpHeaders ;
  private baseURL:string ='https://api.spotify.com/v1/'; 
  private token:string="BQAoCAyNsaHei1eR3nrCLDm_BtbvmAE1WuhHHviPtqYuHaLN27toVT01W1zeD2LEX22U5K6E9YdbNBdKNZpiOKUWbzAYogzmkXU6ATXSKzESzTnYMJyDOiPqHLuprLuqGJpXzJx2FA4";
  
  ObtenerUltimosLanzamientos():Observable<any>
  {
    let response =null;
    
    var peticion = this.httpClient
                  .get(this.baseURL+"browse/new-releases?country=CO&limit=20&offset=0",
                    {headers:new HttpHeaders({'Authorization':`Bearer ${this.token}`})});
    
    return peticion;
   
  }  
}
