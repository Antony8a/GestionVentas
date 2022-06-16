import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  register:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private clienteService:ClienteServiceService,
    private router:Router    
    ) {
    this.register = this.formBuilder.group({
      id:['',Validators.required],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      correo:['',Validators.required],
      direccion:['',Validators.required],
      telefono:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const cliente:Cliente={
      id:this.register.value.id,
      nombres:this.register.value.nombres,
      apellidos:this.register.value.apellidos,
      correo:this.register.value.correo,
      direccion:this.register.value.direccion,
      telefono:this.register.value.telefono
    }
    
    
    this.clienteService.Guardar(cliente).subscribe(dato=>{
      console.log(dato);
      alert("Cliente Guardado");
    },error => console.log(error));
  }

}
