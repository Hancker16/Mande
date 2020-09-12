import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
import { PerfilComponent } from './components/usuarios/perfil/perfil.component';
import { Page404Component } from './components/page404/page404.component';
import {ModuleWithProviders} from '@angular/core';
import { PedidosComponent } from './components/pedidos/pedidos.component';

const routes: Routes = [
  {path: "", component: CategoriasComponent},
  {path: "servicios/:id", component: ServiciosComponent},
  {path: "categorias",component: CategoriasComponent},
  {path: "usuario/login", component: LoginComponent},
  {path: "usuario/registro", component: RegistroComponent},
  {path: "usuario/perfil",component: PerfilComponent},
  {path: "pedidos", component: PedidosComponent},
  {path: "**",component:Page404Component}
];

//exportar modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
