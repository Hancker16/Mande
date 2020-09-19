import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [DataApiService,AuthService]
})

export class RegistroComponent implements OnInit {

  tipodoc = [];
  public new_user: any;

  constructor(
    private dataApi: DataApiService,
    private authApi: AuthService,
    private router: Router
  ) { 

    this.new_user = {

      "idusuario": "",
       "documento":"",
      "nombres": "",
      "apellidos":"" ,
      "edad":"" ,
      "correo":"" ,
      "telefono":"" ,
      "direccion":"" ,
      "sexo":"" ,
      "activo":1 ,
      "create_at":"" ,
      "update_at":"" ,
      "idtipo_usuario":{"idtipo_usuario":1},
      "idtipo_documento":{"idtipo_documento":""},
      "password":"",
      "token":""     
      };
      
  }

  ngOnInit(): void {

    this.dataApi.getTipoDoc().subscribe(
      result => {
        this.tipodoc=result;
      },error => {
        console.log(<any>error);
      }
    );


  }

  onSubmit(form){
    this.dataApi.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
        //form.reset();
      },
      error => {
        console.log(<any>error);
        console.log(this.new_user);
      }
    )
    this.authApi.setUser(this.new_user);
    this.authApi.setToken(JSON.stringify(this.new_user.documento));
    this.router.navigate(["pedidos"]);
  }

}
