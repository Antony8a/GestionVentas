import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { VentaComponent } from './componentes/venta/venta.component';
import { LoginComponent } from './componentes/login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ClienteConsultarComponent } from './componentes/cliente/cliente-consultar/cliente-consultar.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { ProductoComponent } from './componentes/producto/producto.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VentaComponent,
    LoginComponent,
    InicioComponent,
    ClienteConsultarComponent,
    ModalComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
