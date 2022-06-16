import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-cliente-consultar',
  templateUrl: './cliente-consultar.component.html',
  styleUrls: ['./cliente-consultar.component.css']
})
export class ClienteConsultarComponent implements OnInit {

  clientes:Cliente[];
  register:FormGroup;
  show:boolean = false;
  idAtrapada:string;
  nombreAtrapado:string;
  apellidoAptrapado:string;
  correoAtrapado:string;
  direccionAtrapado:string;
  telefonoAtrapado:string;

  constructor(private clienteService:ClienteServiceService,private formBuilder:FormBuilder) {
    this.register = this.formBuilder.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      correo:['',Validators.required],
      direccion:['',Validators.required],
      telefono:['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes(){
    this.clienteService.ConsultarTodos().subscribe(dato=>{
      this.clientes = dato;
    });
  }

  private Eliminar(id:string){
    this.clienteService.Eliminar(id).subscribe(dato=>{
      console.log(dato);
      alert("Cliente eliminado");
      this.getClientes();
    })
  }

  atraparCliente(cliente:Cliente){
    this.idAtrapada=cliente.id;
    this.nombreAtrapado=cliente.nombres;
    this.apellidoAptrapado=cliente.apellidos;
    this.correoAtrapado=cliente.correo;
    this.direccionAtrapado=cliente.direccion;
    this.telefonoAtrapado=cliente.telefono;
  }

  private Actualizar(id:string){
    const cliente:Cliente={
      id:id,
      nombres:this.register.value.nombres,
      apellidos:this.register.value.apellidos,
      correo:this.register.value.correo,
      direccion:this.register.value.direccion,
      telefono:this.register.value.telefono
    }
    
    
    this.clienteService.Actualizar(id,cliente).subscribe(dato=>{
      this.getClientes();
      alert("Cliente actualizado con exito")
    },error => console.log(error));
  }

}
