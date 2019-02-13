import { Component, OnInit } from '@angular/core';
import EmployeeService from '../shared/api/employee.service';
import Employee from '../shared/models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Array<Employee>;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }
}