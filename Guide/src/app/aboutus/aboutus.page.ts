import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor() { }
showMe:boolean=false
  ngOnInit() {
  }
  toogleTag()
  {
    this.showMe=!this.showMe
  }
}
