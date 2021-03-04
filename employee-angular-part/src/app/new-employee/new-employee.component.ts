import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employee: Employees = new Employees();

  constructor(private emplyeeService: EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveNewEmployee(){
    this.emplyeeService.createEmployee(this.employee).subscribe(data =>{
      this.gotoEmployeeList();
    },
    error => console.log(error)
    )
  }

  gotoEmployeeList(){
    this.router.navigate(["/employeeList"]);
  }

  newEmpSubmit(){
    this.saveNewEmployee();
  }

}
