import { Component, OnInit } from '@angular/core';
import { DataApiService } from "src/app/services/data-api.service";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [DataApiService]
})
export class CategoriasComponent implements OnInit {

  categorias = [];
  

  constructor(
    private dataApi: DataApiService
    ) { 

      

    }

  ngOnInit() {

    this.dataApi.getCategorias().subscribe(
      result => {
        this.categorias=result;
        /*console.log(result);*/

      },error => {
        console.log(<any>error);
      }
    );
    
    
  }

  

  

}
