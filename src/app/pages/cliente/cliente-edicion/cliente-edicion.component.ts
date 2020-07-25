import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from 'src/app/_service/cliente.service';

@Component({
  selector: 'app-cliente-edicion',
  templateUrl: './cliente-edicion.component.html',
  styleUrls: ['./cliente-edicion.component.css']
})
export class ClienteEdicionComponent implements OnInit {

  form: FormGroup;

  codigo: string;
  edicion: boolean;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'cliente' : new FormControl(''),
      'nombre' : new FormControl(''),
      'documento' : new FormControl(''),
      'direccion' : new FormControl(''),
    })
    this.route.params.subscribe( (params: Params) => {
      this.codigo = params['id'];
      this.edicion = params['id'] != null;
      this.initForm();
    });
  }

  initForm(){
    if(this.edicion){
      this.clienteService.obtenerPorCodigo(this.codigo).subscribe(data => {
        this.form = new FormGroup({
          'cliente' : new FormControl(data.cliente),
          'nombre' : new FormControl(data.nombre),
          'documento' : new FormControl(data.nroDcto),
          'direccion' : new FormControl(data.direccion),
        });
      });
    }


  }

  enviar(){

  }

}
