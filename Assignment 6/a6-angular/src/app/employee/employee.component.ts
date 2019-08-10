import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeRaw } from '../data/employeeRaw';
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';
import { Position } from '../data/position';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionSubscription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private empService: EmployeeService,
    private activeRoute: ActivatedRoute,
    private posService: PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.activeRoute.params.subscribe((params) => {
      this.employeeSubscription = this.empService.getEmployee(params['_id']).subscribe(emp => {
        this.employee = emp[0];
      });

      this.getPositionSubscription = this.posService.getPositions().subscribe(pos => {
        this.positions = pos;
      });
    });
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(() => {
      this.successMessage = true;

      setTimeout(() => {
        this.successMessage = false;
      }, 2500);
    }, () => {
      this.failMessage = true;

      setTimeout(() => {
        this.failMessage = false;
      }, 2500);
    });
  }

  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }

    if (this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }

    if (this.getPositionSubscription) {
      this.getPositionSubscription.unsubscribe();
    }

    if (this.saveEmployeeSubscription) {
      this.saveEmployeeSubscription.unsubscribe();
    }
  }
}
