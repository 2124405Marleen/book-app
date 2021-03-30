import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class PageCount {
  Pages: number;
}

@Component({
  selector: 'app-average-pages-count',
  templateUrl: './average-pages-count.component.html',
  styleUrls: ['./average-pages-count.component.scss']
})
export class AveragePagesCountComponent implements OnInit {

  allPageCounts: PageCount[] = [];
  totalPageCount = 0;
  averagePageCount = 0;
  constructor(http: HttpClient) {

    http.get('http://localhost:3000/pagecount').subscribe((rec: PageCount[]) => {
      console.log('asd');

      this.allPageCounts = rec;
      rec.forEach(r => this.totalPageCount += r.Pages);

      console.log(this.totalPageCount);
      // for (let i = 1; i < this.allPageCounts.length; i++){
      //   this.totalPageCount += Number(this.allPageCounts[i].Pages);
      // }
      this.averagePageCount = (this.totalPageCount / this.allPageCounts.length);

    });
  }


  ngOnInit(): void {
  }

}
