import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesModule } from './pages.module';
import { PagesComponent } from './pages.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteEdicionComponent } from './cliente/cliente-edicion/cliente-edicion.component';


const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {path: 'nuevo', component: ClienteEdicionComponent},
      {path: 'editar/:id', component: ClienteEdicionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
