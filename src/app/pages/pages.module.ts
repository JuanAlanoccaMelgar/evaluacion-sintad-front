import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { PagesComponent } from './pages.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteEdicionComponent } from './cliente/cliente-edicion/cliente-edicion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, ClienteComponent, ClienteEdicionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
