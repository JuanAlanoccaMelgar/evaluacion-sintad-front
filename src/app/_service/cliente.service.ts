import { ClienteAduanas } from './../_model/clienteAduanas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:8080/cliente';

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodo(){
    return this.http.get<ClienteAduanas[]>(this.url);
  }

	obtenerPorCodigo(codigo: string){
    return this.http.get<ClienteAduanas>(`${this.url}/porCodigo/${codigo}`);
  }

	obtenerPorNombre(nombre: string){
    return this.http.get<ClienteAduanas>(`${this.url}/porNombre/${nombre}`);
  }

	crearCliente(request: ClienteAduanas) {
    return this.http.post(this.url, request);
  }

	actualizarCliente(request: ClienteAduanas) {
    return this.http.put(this.url, request);
  }

	eliminarCliente(codigo: string) {
    return this.http.delete(`${this.url}/${codigo}`);
  }

}
