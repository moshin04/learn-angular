import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg = "";
  
  cartmsg="";

  myAddCart(){

      this.msg = "Added to CART"
  }



  myInputValue(event: any){
    console.log(event.target.value);

  }

  addCart(event: any){
    this.cartmsg = event.target.value + "Added in Cart"
  }

}
