import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EjemploDirectivasComponent } from './components/ejemplo-directivas/ejemplo-directivas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { appRouting } from "./app.routes";
import { DetallesHeroesComponent } from './components/detalles-heroes/detalles-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    EjemploDirectivasComponent,
    ContactoComponent,
    DetallesHeroesComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
