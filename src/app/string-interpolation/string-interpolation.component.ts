import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "Paulordie";

   age = 100;
  person: any = {
    firstname: "Paulo",
    lastname: "Correa",
    age: 32,
    address: "street good"
  }

  constructor() { }

  ngOnInit() {
  }

}
