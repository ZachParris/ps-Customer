import { Component, Input } from '@angular/core';

import { Customer, Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'my-address',
    templateUrl: 'address.component.html'
})
export class AddressComponent {
    @Input() address: Address;
    regions = ['West', 'East', 'North', 'South', 'Midwest'];
    states = ["California", "Quebec", "Jalisco", "Illinois"];
}