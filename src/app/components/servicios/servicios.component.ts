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

  constructor(
    private dataApi: DataApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 

    this.new_pedido = {
      "idservicio":"",
      "costo":""
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

   
  }

  onSubmit(form){
    this.dataApi.addPedidoLocal(JSON.stringify(this.new_pedido.idservicio),this.new_pedido);
    
    form.reset();
    
  }

  key(Key: string){
    return this.dataApi.obtenerPedidoLocal(this.new_pedido.idservicio);
    console.log()
  }

}
