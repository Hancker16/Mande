import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json" 
  });


  loginuser(email:string,password:string):Observable<any>{
    const url_api="https://jgitsolutions.com/daleapp/dale/logeo"
    return this.http.post(
      url_api,
      {email,password},   
      {headers:this.headers}
      ).pipe(map(data=>data));
  }

  addLogin(user): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    const url_api = "https://jgitsolutions.com/daleapp/dale/logeo";

    return this.http.post(url_api,params,{headers: headers});

  }

  setUser(user):void{
    let user_string=JSON.stringify(user);
    localStorage.setItem("currentUser",user_string);

  }

  setToken(token):void{

    localStorage.setItem("accessToken",token);
  }

  

  getToken(){
    return localStorage.getItem("accessToken");

   }

  /*getCurrentUser(){
    let user_string=localStorage.getItem("currentUser");
    if(isNullOrUndefined(user_string)){
      let user=JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    let accessToken=localStorage.getItem("accessToken");
  }*/
}
