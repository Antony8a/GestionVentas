import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Factura{
    producto:Producto;
    formasDePago:string[];
    cliente:Cliente;
}