import { Component, Input, OnInit } from '@angular/core';
import { Icar } from '../icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carToShow! : Icar;

  constructor() { }

  ngOnInit(): void {
  }

}
