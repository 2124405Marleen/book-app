import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookharrypotter1: Book = {
    name: 'Harry Potter en de steen der wijze',
    pages : 200,
    genre: 'fantasy'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
