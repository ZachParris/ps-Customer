import { Component, Input } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-list.component.css']
})


export class CustomerDetailComponent  {
  @Input() customer: Customer;

  showAddress = true;
}
