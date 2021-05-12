import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imagePath: string;
  constructor() {
    this.imagePath = 'https://www.fitoland.hu/images/termek/oth_378-1_vbig.jpg'
   }

  ngOnInit(): void {
  }

}
