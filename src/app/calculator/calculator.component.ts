import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  isStart:boolean = false;
  total:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
