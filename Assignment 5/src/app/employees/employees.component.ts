import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService
    .getEmployees()
    .subscribe(data => {
      this.employees = data;
    });
    this.loadingError = true;
  }

  ngOnDestroy() {
    if (this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
