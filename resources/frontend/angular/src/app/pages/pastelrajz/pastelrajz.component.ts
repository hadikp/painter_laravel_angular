import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-pastelrajz',
  templateUrl: './pastelrajz.component.html',
  styleUrls: ['./pastelrajz.component.scss']
})
export class PastelrajzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel()
  }

}
