import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotify-card',
  templateUrl: './spotify-card.component.html',
  styleUrls: ['./spotify-card.component.css']
})
export class SpotifyCardComponent implements OnInit {

  @Input() cardData :any
  artistas:any []=[];

  constructor() { }

  ngOnInit(): void 
  {
    this.artistas=this.cardData.artists;
  }

}
