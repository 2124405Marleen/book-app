import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class GenreCount {
  GenreName: string;
  total: number;
}
@Component({
  selector: 'app-genre-count',
  templateUrl: './genre-count.component.html',
  styleUrls: ['./genre-count.component.scss']
})
export class GenreCountComponent implements OnInit {

  bookData: any = null;
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/genre/count').subscribe((rec: GenreCount[]) => {
      console.log(rec);
      // this.bookData = rec;
      const tmp = [];
      for (const genre of rec) {
        tmp.push({value: genre.total, name: genre.GenreName});
      }
      this.bookData = tmp;
    });
  }

  ngOnInit(): void {
  }

}
