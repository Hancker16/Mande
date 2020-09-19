import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { error } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  providers: [DataApiService]
})
export class PedidosComponent implements OnInit {

  servicios =[];
  tipopago=[];
  public new_pedido:any;
  public new_orden:any;
  public cantidad: any;
  serviciosls= [];//Para servicios del localstorage

  constructor(
    private dataApi: DataApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this.new_orden={
      "idpedido_i" : "" ,
      "codigo_pedido_i" : "TANE" , 
      "cantidad_i" : "1" , 
      "fecha_pedido_i" : "" , 
      "hora_pedido_i" : "" , 
      "activo_i" : 1 , 
      "create_at_i" : "" , 
      "update_at_i" : "" ,
      "orden":this.serviciosls=this.dataApi.getPedidoLocal(),
      "usuario_i" : {"idusuario":1021} , 
      "idestado_pedido_i":2, 
      "forma_pago"   :  {"idforma_pago":""}
    }

   }

  ngOnInit(): void {

    //Para contar las keys del local storage
    this.cantidad=this.dataApi.cantidadPedidos();

    //Obtener pedidos de localstorge
    this.serviciosls=this.dataApi.getPedidoLocal();
 
    //Obtener todos los servicios del api rest
    this.dataApi.getServicioAll().subscribe(
      result =>{
        this.servicios = result;
      },error =>{
        console.error(<any>error);
      }
    )

    //Obtener todos los tipos de pago del api rest
    this.dataApi.getTipoFormaPago().subscribe(
      result=>{
        this.tipopago = result;

      },error =>{
        console.log(error);
      }
    )
  
  }
//Guardar pedidos y ordenes en la base de datos con el evento submit
  onSubmit(form){

    this.dataApi.addOrden(this.new_orden).subscribe(
      response => {
        console.log(response);
 
      }, error => {
        console.log(<any>error);
      }
    )
  }

//Eliminar todo el pedido del localstorage
  deletePedidolocal(){
    localStorage.clear();
    this.ngOnInit();
  }

//Quitar un servicio del localstorage
  quitarItem(key: string){
    localStorage.removeItem(key);
    this.ngOnInit();
  }




  

}
