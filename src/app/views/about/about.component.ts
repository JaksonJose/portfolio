import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cards: any;

  constructor(private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.getCardsInfo();
  }

 getCardsInfo(){
    this.translate.onLangChange.subscribe(response => this.cards = response.translations.cards);
  }
}