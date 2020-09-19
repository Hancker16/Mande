import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CategoriasComponent } from "../categorias/categorias.component";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [DataApiService]
})
export class ServiciosComponent implements OnInit {

  servicios =[];
  public catId: any;
  public new_pedido: any;
  tipocomproban=[];

  constructor(
    private dataApi: DataApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

    this.new_pedido = {
      "idorden":"",
      "codigo_orden":"",
      "costo_total":{servicios: "costo"},
      "pagare":"",
      "vuelto":"",
      "activo":1,
      "create_at":"",
      "update_at":"",
      
      "tipocomprobante":{"idtipo_comprobante":""},
      "proveedor":{"idproveedor":392},
      "servicios":{
        id_servicio:"id_servicio",
        nombre_servicio:"nombre_servicio"},
      
  
    }

    this._route.params.subscribe((params: Params)=>{
      this.catId = params.id;
      /*console.log(this.catId)*/
    })

  }

  ngOnInit(): void {

    this.dataApi.getServicios(this.catId).subscribe(
      result => {

        this.servicios=result;
        /*console.log(result);*/
        
      },error => {
        console.log(<any>error);
        
      }
    )

    //Obtener todos los tipos de comprobante del api rest
    this.dataApi.getTipoComprobante().subscribe(
      result=>{
        this.tipocomproban = result;

      },error =>{
        console.log(error);
      }
    )

   
  }

  onSubmit(form){
    this.dataApi.addPedidoLocal(JSON.stringify(this.new_pedido.servicios.id_servicio),this.new_pedido);   
  }

  /*key(Key: string){
    return this.dataApi.obtenerPedidoLocal(this.new_pedido.idservicio);
    console.log()
  }*/

}
