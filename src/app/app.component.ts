import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';
  private _title = 'test calculator';

  getTitle(){
    return this.title;
  }
  setTitle(value:string){
    this._title = value;
  }
}
