import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'heroe', component: HeroesComponent },
    { path: 'contacto', component: ContactoComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const appRouting = RouterModule.forRoot(routes);