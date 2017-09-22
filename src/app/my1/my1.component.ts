import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my1',
  styleUrls: ['./my1.component.css'],
  templateUrl: './my1.component.html'
})
export class My1Component {
  public textBoxValuemy1: String;
  @Input() a1: String
  @Output() my1Event: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  localmyClickEvent() {
    this.my1Event.emit({ value: this.textBoxValuemy1 });
  }
}
