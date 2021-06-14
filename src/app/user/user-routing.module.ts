import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { EmployeeComponent } from '../employee/employee.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'accounts',component:AccountsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
