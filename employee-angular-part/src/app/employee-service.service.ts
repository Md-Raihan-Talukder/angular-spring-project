import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl ="http://localhost:8081/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employees[]>{
    return this.httpClient.get<Employees[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employees): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id: number): Observable<Employees>{
    return this.httpClient.get<Employees>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employees): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
