import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { GenreCountComponent } from './genre-count/genre-count.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { AveragePagesCountComponent } from './average-pages-count/average-pages-count.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AboutMeComponent,
    HomePageComponent,
    GenreCountComponent,
    AddNewDataComponent,
    AveragePagesCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgCircleProgressModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BooksComponent]
})
export class AppModule { }
