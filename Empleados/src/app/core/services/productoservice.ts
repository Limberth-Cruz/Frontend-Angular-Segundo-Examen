import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';                   

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {                       
  private base = 'http://127.0.0.1:8000/api/empleados';

  constructor(private http: HttpClient) {}           

  listaEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.base);
  }
  registrarEmpleados(empleados: any): Observable<any> {
    return this.http.post<any>(this.base, empleados);
  }
}
