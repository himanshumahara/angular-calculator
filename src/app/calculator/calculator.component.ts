import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  isStart:boolean = false;
  isLastExpDone:boolean = false;
  total:number = 0;
  expText:string='';
  lastExpression:string = '';
  isFocused:boolean=false;
  @ViewChild('calculatorsection') element: ElementRef | undefined;
  @ViewChild('calculatorInput') input:ElementRef | undefined;


  constructor() { }

  ngOnInit(): void {
  }
  addkey(key:string){
    this._handleKey(key);
  }
  onExpressionChange(experssion:string){
    this.expText = experssion  = this._filterText(experssion);
  }
  updatechange(experssion:string){
    this.expText   = this._filterText(experssion);
  }

  @HostListener('document:click', ['$event'])
  onClick(e:Event) {
    if(this.element?.nativeElement.contains(e.target)){
      this.isFocused = true;
    }else{
      this.isFocused = false;
    }
  }
  @HostListener('document:keydown', ['$event'])
  onKeyPress(e:KeyboardEvent) {
    this._handleKey(e.key);
  }
  private _handleKey(key:string){
    
    switch(key){
      case '=':
        this.lastExpression = this.expText + key;
        this.isLastExpDone = true;
        this._calculate(this.expText);
        break;
      case 'Backspace':
        if(this.isLastExpDone){
          this.expText = '0'; 
          this.lastExpression = 'Ans: ' + this.total;
          
        }else{
          if(this.expText.length > 0){
            this.expText = this.expText.slice(0, -1); 
          }

        }
        
        break;
      default:
        this.lastExpression = 'Ans: ' + this.total;
        this.isLastExpDone = false;
        this.expText = this._filterText(this.expText + key);
    }

  }
  private _filterText(_experssion:string):string{
    if(/[^0-9\+\-\*\%]/g.test(_experssion)){
      console.log('string altred',_experssion.replace(/[^0-9\+\-\*\%]/g,''));
      _experssion  = _experssion.replace(/[^0-9\+\-\*\%]/g,'');
    }
    return _experssion;
  }

  private __focusOn(){
    this.isFocused = !this.isFocused;
  }
  private _calculate(exp = ''){
    const exp_array = exp.split(/([\+\-\*\%])/g);
    let result = 0;
    let last_operator = '';
    for(let i=0; i < exp_array.length; i++){
      if(exp_array[i].match(/([\+\-\*\%])/g)){
        last_operator = exp_array[i];
      }else{
        switch(last_operator){
          case '+':
            result += parseInt(exp_array[i]);
            break;
          case '-':
            result -= parseInt(exp_array[i]);
            break;
          case '*':
            result *= parseInt(exp_array[i]);
            break;
          case '%':
            result = result % parseInt(exp_array[i]);
            break;
          case '/':
            result = result / parseInt(exp_array[i]);
            break;
          default:
            result = parseInt(exp_array[i]);
        }
      }
    }
    this.total = result;
    this.expText = result+'';
  } 
}
