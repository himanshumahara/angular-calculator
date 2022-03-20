import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
