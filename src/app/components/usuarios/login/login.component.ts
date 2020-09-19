import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any;
  logeado ={
      "idusuario":""
  }
    
  ;

  constructor(
    private authApi: AuthService,
    private route: Router
  ) { 

    this.user={
      "correo":"",
      "password":"",
    }
  }

  ngOnInit(): void {
  }

  onLogin(){
    return this.authApi.addLogin(this.user).subscribe(
      response=>{
        this.logeado=response;
        //console.log(response);
        this.authApi.setUser(this.logeado);
        let token = this.logeado.idusuario;
        this.authApi.setToken(JSON.stringify(token));
        this.route.navigate(["pedidos"])


      },error=>{
        console.log(<any>error);
      }
    )
  }

}
