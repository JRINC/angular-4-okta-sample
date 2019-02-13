
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import Employee from '../models/Employee';

@Injectable()
export default class EmployeeService {
  public API = 'http://localhost:8082/api';
  public EMPLOYEES_API = `${this.API}/employees`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.EMPLOYEES_API);
  }

  get(id: string) {
    return this.http.get(`${this.EMPLOYEES_API}/${id}`);
  }

  save(employee: Employee): Observable<Employee> {
    let result: Observable<Employee>;
    if (employee.id) {
      result = this.http.put<Employee>(
        `${this.EMPLOYEES_API}/${employee.id}`,
        employee
      );
    } else {
      result = this.http.post<Employee>(this.EMPLOYEES_API, employee);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.EMPLOYEES_API}/${id.toString()}`);
  }
}