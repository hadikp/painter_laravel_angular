import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      let $window=$(window);
      let $htmlBody=$('html,body');
      let $gorgetogomb=$('#nyil');
      
      const lap=200;
      $window.scroll(function(){
        let aktTav:number=$htmlBody.scrollTop();
        if(aktTav >=lap){
          $gorgetogomb.show(500);
        }else $gorgetogomb.hide(100);
      });
      //gombnyomásra felugrik a tetejére
      $gorgetogomb.click(function(){
        $htmlBody.animate({scrollTop:0},500);
       });
     });
  }

}
