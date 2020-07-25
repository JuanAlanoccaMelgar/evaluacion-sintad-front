import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/_service/cliente.service';
import { ClienteAduanas } from 'src/app/_model/clienteAduanas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  displayedColumns = ['cliente', 'nombre', 'nroDcto', 'direccion', 'acciones'];
  dataSource: MatTableDataSource<ClienteAduanas>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private clienteService: ClienteService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.clienteService.obtenerTodo().subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

  }

}
