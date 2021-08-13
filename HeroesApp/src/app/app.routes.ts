import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallesHeroesComponent } from './components/detalles-heroes/detalles-heroes.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroe', component: HeroesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'detalles-heroes/:nombreHeroe', component: DetallesHeroesComponent },
    { path: 'buscar-heroes/:nombreHeroe', component: BuscarHeroesComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const appRouting = RouterModule.forRoot(routes);