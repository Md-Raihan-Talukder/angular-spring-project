import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { Employees } from '../employees';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employees = new Employees();
  constructor(private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },
    error => console.log(error)
    );
  }

  newEmpSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.gotoEmployeeList();
    },
    error => console.log(error)
    );
  }

  gotoEmployeeList(){
    this.router.navigate(["/employeeList"]);
  }

}
