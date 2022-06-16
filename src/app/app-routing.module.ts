import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteConsultarComponent } from './componentes/cliente/cliente-consultar/cliente-consultar.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { VentaComponent } from './componentes/venta/venta.component';

const routes: Routes = [
  {path: '', redirectTo: '/login',pathMatch:'full'},

  {path:'inicio',component:InicioComponent},
  {path:'cliente',component:ClienteComponent},
  {path:'venta',component:VentaComponent},
  {path:'clientes',component:ClienteConsultarComponent},
  {path:'login',component:LoginComponent},
  {path: '**', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
