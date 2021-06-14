import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public name = "Moshin";

  constructor() { }

  ngOnInit(): void {
  }

  hello(){
    console.log(this.name);
  }

  buttonclick(){
    console.log(this.name);
  }

}
