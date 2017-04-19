import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';
  region = 'West';

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  regionChange(region: string){
    this.region = region;
  }
}
