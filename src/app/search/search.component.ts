import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filtre : string = "";

  constructor() { }

  filterBooks= (inputValue :  string) =>{
    this.filtre = inputValue;
  }

  ngOnInit(): void {
  }

}
