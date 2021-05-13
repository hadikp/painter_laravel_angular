import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CeruzarajzComponent } from './pages/ceruzarajz/ceruzarajz.component';
import { PastelrajzComponent } from './pages/pastelrajz/pastelrajz.component';
import { AkvarellComponent } from './pages/akvarell/akvarell.component';
import { OlajfestmenyComponent } from './pages/olajfestmeny/olajfestmeny.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CeruzarajzComponent,
    PastelrajzComponent,
    AkvarellComponent,
    OlajfestmenyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
