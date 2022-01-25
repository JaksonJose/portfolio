import { Component, Host, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenu: boolean = false;
  public screenSize: any;

  constructor(private translateService: TranslateService) {  }

  ngOnInit(): void {
    this.isMenu =  window.innerWidth > 630 ? true : false;
  }

  // It keeps listening the device width size
  @HostListener('window:resize', ['$event'])
  onResize = () => this.isMenu = window.innerWidth > 630 ? true : false;

  // Select the language
  public selectedLanguage = (event: any) => this.translateService.use(event.target.value);

  // Open and close menu
  public openMenu = () => this.isMenu = !this.isMenu ? true : false;
}
