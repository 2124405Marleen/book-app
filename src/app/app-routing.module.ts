import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent} from './books/books.component';
import { AboutMeComponent} from './about-me/about-me.component';
import { HomePageComponent} from './home-page/home-page.component';
import { AddNewDataComponent} from './add-new-data/add-new-data.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'add', component: AddNewDataComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
