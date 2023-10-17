import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  titulo : string ="Mi primer video";
  image : string = "https://cdn2.mediotiempo.com/uploads/media/2019/12/15/youtube-lista-videos-musicales-vistos.jpg";
  constructor(){}
  ngOnInit(): void {
    
  }

}
