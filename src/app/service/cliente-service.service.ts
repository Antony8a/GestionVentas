import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private baseUrl = "http://localhost:8080/api/v1/clientes";

  constructor(
    private http:HttpClient
  ) { }

  ConsultarTodos():Observable<Cliente[]>{
    return this.http.get<Cliente[]>( `${this.baseUrl}`);
  }

  Guardar(cliente:Cliente):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,cliente);
  }

  Eliminar(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  Actualizar(id:string,cliente:Cliente){
    return this.http.put(`${this.baseUrl}/${id}`,cliente);
  }


}
