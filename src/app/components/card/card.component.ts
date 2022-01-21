import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardInfo: any;

  images: any;

  constructor() { 
  }

  ngOnInit(): void { 
    this.imagesSelection()  
  }

  imagesSelection() {
    
    let img: string[] = [];
    let title: string = this.cardInfo.title.toLowerCase();

    if(title.includes('frontend')){
      img = ['html','sass', 'typescript', 'reactjs', 'angular'];
      this.images = img;
      return;
    }

    if(title.includes('backend')){
      img = ['csharp','dotnet'];
      this.images = img;
      return;
    } 
  }
}
