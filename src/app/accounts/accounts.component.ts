import { Component, OnInit } from '@angular/core';
import { Accounts } from '../user/model/accounts';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts = new Accounts();

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log(this.accounts);
  }


}
