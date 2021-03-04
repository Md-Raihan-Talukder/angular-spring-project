import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import {Employees} from '../employees'

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employeelist: Employees[] | undefined;

  constructor(private employeeService : EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmpDataList();
  }

  private getEmpDataList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeelist = data;
    });
  }

  updateEmp(id: number){
    this.router.navigate(["/updateEmp", id]);
  }

  deleteEmp(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmpDataList();
    });
  }

}
