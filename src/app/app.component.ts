import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Icar } from './icar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title="Gestion des livres";

  /*cars:Array<Icar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'porsche', model: '911'},
    {make: 'bmw', model: 'm3'}
    ];*/

  ngOnInit(): void {

  }


}
