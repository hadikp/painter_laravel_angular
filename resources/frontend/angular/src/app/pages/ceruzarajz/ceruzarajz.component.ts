import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-ceruzarajz',
  templateUrl: './ceruzarajz.component.html',
  styleUrls: ['./ceruzarajz.component.scss']
})
export class CeruzarajzComponent implements OnInit {

   _albums = [];
   album: any = {};

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = 'https://themyth92.com/project/ngx-lightbox/demo/img/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'https://themyth92.com/project/ngx-lightbox/demo/img/image' + i + '-thumb.jpg';
     this.album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(this.album);
    }
   }

   open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  
}

  ngOnInit(): void {
  }

}
