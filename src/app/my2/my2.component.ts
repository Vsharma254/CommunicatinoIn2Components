import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my2',
  styleUrls: ['./my2.component.css'],
  templateUrl: './my2.component.html',
  inputs:['b1']
})
export class My2Component {
  public textBoxValuemy1: String;
  @Input() b1: String
  @Output() my2Event: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  localmyClickEvent() {
    this.my2Event.emit({ value: this.textBoxValuemy1 });
  }
}
