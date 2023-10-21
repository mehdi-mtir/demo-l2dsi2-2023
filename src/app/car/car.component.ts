import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icar } from '../icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carToShow! : Icar;
  @Output() carDelete = new EventEmitter<Icar>();

  constructor() { }

  delete = (car : Icar)=>{
    this.carDelete.emit(car);
  }

  ngOnInit(): void {
  }

}
