import {Component} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public c1:string;
  public c2:string;
  catchmy1Event(Objvalue:any)
  {
    this.c2=Objvalue.value;
    console.log('event 1 is called');
  }
  catchmy2Event(Objvalue:any)
  {
    this.c1=Objvalue.value;    
    console.log('event 2 is called');
  }
}
