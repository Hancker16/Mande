import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { error } from '@angular/compiler/src/util';
import { ServiciosComponent } from '../servicios/servicios.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [DataApiService,ServiciosComponent]
})
export class PedidosComponent implements OnInit {

  public cantidad: any;
  public serviciosls: any;
  servicios =[];

  constructor(
    private dataApi: DataApiService,
    private servi: ServiciosComponent,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.cantidad=this.dataApi.cantidadPedidos();
    
    console.log(this.serviciosls)
    this.dataApi.getServicioAll().subscribe(
      result =>{

        this.servicios = result;
      },error =>{
        console.error(<any>error);
      }
    )
  }



  

}
