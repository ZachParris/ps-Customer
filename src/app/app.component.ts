import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  
  customer: Customer = {
    id: 1,
    name: 'Bill Murray',
    address: {
      city: 'SomeTown',
      street: '123 Belmont',
      state: 'Texas',
      region: 'West'
    }
  };

  hideAddress = false;
}
