import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-list.component.css']
})


export class CustomerDetailComponent  {
  @Input() customer: Customer;
  @Output() shift = new EventEmitter<number>();

  showAddress = true;


  left(){
    this.shift.emit(-1);
  }

  right(){
    this.shift.emit(1);
  }
}
