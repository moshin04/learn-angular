import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayName = false;

  show = true;
  
  color = "green";

  condition = true;

  user: any;

  constructor() {

    this.user = {
      name: 'moshin',
      title: 'engineer',
      address: 'karnataka',
      phone: [9874561230, 646532656, 654666561, 797979798],
      phonefor: [123456789, 936258741, 123456987, 553656865]
    }
  }

  ngOnInit(): void {

  }


}
