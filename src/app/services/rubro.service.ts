import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rubro } from '../models/rubro';

@Injectable({
  providedIn: 'root'
})
export class RubroService {

  private url = "http://127.0.0.1:8000/api/rubros/"
  constructor(private http:HttpClient) { }

  getRubros():Observable<any>{
    return this.http.get(this.url)
  }

  createRubro(rubro:Rubro):Observable<any>{
    return this.http.post(this.url,rubro)
  }
}

