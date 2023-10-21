import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books : Book[] = [
    new Book(1, "Power of habits", "Auteur 1", 20),
    new Book(2, "Atomic habits", "Auteur 2", 30),
    new Book(3, "Power of now", "Auteur 3", 40)
  ];
  filtredBooks? : Book[];

  constructor() { }

  filterBooks = (f : string)=>{
    this.filtredBooks = this.books.filter(
      book=>book.title.includes(f)
    )
  }

  ngOnInit(): void {
    this.filtredBooks = this.books;
  }

}
