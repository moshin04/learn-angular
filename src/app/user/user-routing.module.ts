import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { DatabindComponent } from '../databind/databind.component';
import { EmployeeComponent } from '../employee/employee.component';
import { EventbindComponent } from '../eventbind/eventbind.component';
import { NgifdirectiveComponent } from '../ngifdirective/ngifdirective.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path:'register',component:RegisterComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'databind',component:DatabindComponent},
    {path: 'eventbind',component:EventbindComponent},
    {path: 'ngifdirective',component:NgifdirectiveComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
