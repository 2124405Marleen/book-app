import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent} from './books/books.component';
import { AboutMeComponent} from './about-me/about-me.component';
import { HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: 'books-component', component: BooksComponent},
  {path: 'about-component', component: AboutMeComponent},
  {path: 'home-component', component: HomePageComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
