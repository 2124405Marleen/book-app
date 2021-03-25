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
  // totalPageCount: number;
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/pagecount').subscribe((rec: PageCount[]) => {
      this.allPageCounts = rec;

      // for (let i = 1; i < this.allPageCounts.length; i++){
      //   this.totalPageCount += Number(this.allPageCounts[i].Pages);
      // }
    });

  }


  ngOnInit(): void {
  }

}
