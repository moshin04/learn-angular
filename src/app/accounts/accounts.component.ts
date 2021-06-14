import { Component, OnInit } from '@angular/core';
import { Accounts } from '../user/model/accounts';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = new Accounts();

  constructor() { }

  ngOnInit(): void {
    let errors = new FormGroup({
      name: new FormControl(this.accounts.accnumber, [
        Validators.required,
        Validators.minLength(4),
      ]),

    });
console.log(errors);

  }

  onSubmit(){
    console.log(this.accounts);
  }


}
