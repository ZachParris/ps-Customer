import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  name = 'Bill Murray';
  city = 'SomeTown';
  street = '123 Belmont'
  region = 'West';
  hideAddress = false;

  image = 'favicon.ico';
  color = 'red';
}
