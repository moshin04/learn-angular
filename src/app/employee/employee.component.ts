import { Component, OnInit } from '@angular/core';
import { Employee } from '../user/model/employee';
import { FormGroup,FormControl,Validators } from '@angular/forms'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = new Employee();
  
  
  constructor() { }

  ngOnInit(): void {

    let errors = new FormGroup({
      name: new FormControl(this.employee.empname, [
        Validators.required,
        Validators.minLength(4),
      ]),

    });
console.log(errors);

  }

  

  onSubmit(){
    console.log(this.employee);
  }


}
