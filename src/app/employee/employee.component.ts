import { Component, OnInit } from '@angular/core';
import { Employee } from '../user/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = new Employee();
  
  
  constructor() { }

  ngOnInit(): void {

  }


  onSubmit(){
    console.log(this.employee);
  }


}
