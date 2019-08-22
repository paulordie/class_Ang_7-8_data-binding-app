import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname: string = 'Paulordie';

   age = 100;
  person: any = {
    firstname: 'Paulo',
    lastname: 'Correa'
  }

  constructor() { }

  ngOnInit() {
  }

}
