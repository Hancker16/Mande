import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


//Services
import { DataApiService  } from "./services/data-api.service";
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ServiciosComponent,
    PedidosComponent,
    OrdenesComponent,
    Page404Component,
    AdminComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
