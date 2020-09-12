import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient) { }

  getCategorias():Observable<any>{
    const url_api = "https://jgitsolutions.com/daleapp/dale/categoria";
    return this.http.get(url_api);
  }

  getTipoDoc():Observable<any>{
    const url_api = "https://jgitsolutions.com/daleapp/dale/tipodocumento";
    return this.http.get(url_api);
  }

  getServicios(catId):Observable<any>{
    const url_api = "https://www.jgitsolutions.com/daleapp/dale/servicios/"
    return this.http.get(url_api+catId);
  }

  getServicioAll():Observable<any>{
    const url_api = "https://www.jgitsolutions.com/daleapp/dale/servicios/"
    return this.http.get(url_api);
  }

  addUser(user): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    const url_api = "https://www.jgitsolutions.com/daleapp/dale/usuario";

    return this.http.post(url_api,params,{headers: headers});

  }

  addPedido(pedido): Observable<any>{
    let params = JSON.stringify(pedido);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    const url_api = "https://www.jgitsolutions.com/daleapp/dale/pedido";

    return this.http.post(url_api,params,{headers: headers});
  }

  addPedidoLocal(key: string, data: any){
    try {
      localStorage.setItem(key,JSON.stringify(data));
      /*var t=localStorage.length;
      console.log(t);*/
    } catch (error) {
      console.log(error);
      
    }
  }

  obtenerPedidoLocal(key: string){
    try {
       return localStorage.getItem(key);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  cantidadPedidos(){
    try {
      return localStorage.length;
      
    } catch (error) {
      console.log(error);
    }
  }
}
