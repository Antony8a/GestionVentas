import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { Venta } from 'src/app/models/Venta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  ventas:any[]=[];
  register:FormGroup;
  cliente:Cliente;
  constructor(
    private formBuilder:FormBuilder,
  ) {
    this.register = this.formBuilder.group({
      fechaVenta:['',Validators.required],
      productosVendidos:['',Validators.required],
      cantidad:['',Validators.required],
      precioUnitario:['',Validators.required],
      iva:['',Validators.required],
      fechaEntrega:['',Validators.required],
      direccionEntrega:['',Validators.required],
      cliente:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const venta:Venta={
      
      fechaVenta:this.register.value.fechaVenta,
      producto:this.register.value.productosVendidos,
      cantidad:this.register.value.cantidad,
      precioUnitario:this.register.value.precioUnitario,
      iva:this.register.value.iva,
      fechaEntrega:this.register.value.fechaEntrega,
      direccionEntrega:this.register.value.direccionEntrega,
      cliente:this.register.value.cliente

    }

    this.ventas.push(venta);
    console.log(venta)

  }

}
