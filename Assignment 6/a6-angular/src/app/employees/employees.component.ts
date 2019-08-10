import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
  filteredEmployees: Employee[];
  getEmployeesSub: any;
  loadingError: boolean = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService
    .getEmployees()
    .subscribe(employees => {
      this.employees = employees;
      this.filteredEmployees = employees;
    },
    function(e) {
      this.loadingError = true;
    });
  }

  routeEmployee(id: string) {
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event: any) {
    let input: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((em) => {
      (em.FirstName.toLowerCase().indexOf(input) != -1) ||
      (em.LastName.toLowerCase().indexOf(input) != -1) ||
      (em.Position["PositionName"].toLowerCase().indexOf(input) != -1)
    })
  }

  ngOnDestroy() {
    if (this.getEmployeesSub) {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
