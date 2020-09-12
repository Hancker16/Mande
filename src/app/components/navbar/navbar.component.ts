import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public cantidad: any;

  constructor(
    private dataApi: DataApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
  }
  public app_name = "Mande!"

  ngOnInit(): void {
    this.cantidad=this.dataApi.cantidadPedidos();
  }

}
