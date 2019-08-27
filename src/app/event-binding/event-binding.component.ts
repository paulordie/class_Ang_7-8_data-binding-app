import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "Meu Botão";
  i:number = 0;
  
  constructor() { }
  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;

  ngOnInit() {
  }

  save(){
    console.log("clicou aqui!");
  }
  increment(){
    this.i++;
    this.buttonName = "Foi clicado" + this.i + " time";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }
  cbChange(event){
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }
  selectionChange(event){
    console.log(event);
    this.selectedOption =  event.value;
  }

}
