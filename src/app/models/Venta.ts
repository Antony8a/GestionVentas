import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Venta{
    fechaVenta:Date;
    producto:Producto;
    cantidad:number;
    precioUnitario:number; 
    iva:number;
    fechaEntrega:Date;
    direccionEntrega:string;
    cliente:Cliente;
}