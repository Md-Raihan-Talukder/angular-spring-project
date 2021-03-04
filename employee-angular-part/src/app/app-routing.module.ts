import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ProfileEmployeeComponent } from './profile-employee/profile-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: "employeeList", component: EmpListComponent},
  {path: "", redirectTo: "employeeList", pathMatch: "full"},
  {path: "register", component: NewEmployeeComponent},
  {path: "updateEmp/:id", component:UpdateEmployeeComponent},
  {path: "profile/:id", component:ProfileEmployeeComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
