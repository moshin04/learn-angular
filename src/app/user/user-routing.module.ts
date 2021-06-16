import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { DatabindComponent } from '../databind/databind.component';
import { DirectivesComponent } from '../directives/directives.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EventbindComponent } from '../eventbind/eventbind.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'databind',component:DatabindComponent},
    {path: 'eventbind',component:EventbindComponent},
    {path: 'directives',component:DirectivesComponent},
    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
