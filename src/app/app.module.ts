import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './user/user.module';
import { EmployeeComponent } from './employee/employee.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FormsModule } from '@angular/forms';
import { DatabindComponent } from './databind/databind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { DirectivesComponent } from './directives/directives.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AccountsComponent,
    DatabindComponent,
    EventbindComponent,
    DirectivesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
