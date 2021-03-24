import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface  Book{
  ISBN: string;
  BookName: string;
  Rating: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/books').subscribe( (rec: Book[]) => {


      this.books = rec;
    });
  }

  ngOnInit(): void {
  }

}
