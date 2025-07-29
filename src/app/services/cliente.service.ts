import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlbackend = "http://127.0.0.1:8000/api/clientes/"

  constructor(private http:HttpClient) { }

  crearCliente(cliente:Cliente):Observable<any> {
    return this.http.post(this.urlbackend,cliente);
  }

  getClientes():Observable<any>{
    return this.http.get(this.urlbackend);
  }

}
