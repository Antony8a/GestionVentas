import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaServiceService {

  constructor(private http:HttpClient) { }

  ConsultarTodos(){
    return this.http.get('aquiva la ruta de el provedor de apis');
  }

  Guardar(venta:any){
    return this.http.post('aquiva la ruta de el provedor de apis',venta);
  }

  Eliminar(id:string){
    return this.http.delete('aquiva la ruta de el provedor de apis/'+id);
  }

  Actualizar(id:string,venta:any){
    return this.http.put('aquiva la ruta de el provedor de apis/'+id,venta);
  }

}
