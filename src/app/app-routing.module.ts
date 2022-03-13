import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Componentes/home/home.component';
import {ArtistaComponent} from './Componentes/artista/artista.component';
import {SearchComponent} from './Componentes/search/search.component';

const routes: Routes = [

{path:'home', component:HomeComponent},
{path:'artista/:id', component:ArtistaComponent},
{path:'search', component:SearchComponent},
{path:'', pathMatch:'full', redirectTo:'home' },
{path:'**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({



  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
