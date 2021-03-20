import {Component, OnInit} from '@angular/core';
import {Book, genre, stars} from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookharrypotter1: Book = {
    isbn: 1,
    name: 'Harry Potter en de steen der wijze',
    pages : 200,
    genre: genre.FANTASY,
    rating: stars.fourstars,
    review: 'no review',
    favorites: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
