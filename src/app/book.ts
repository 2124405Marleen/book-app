export interface Book {
  name: string;
  pages: number;
  genre: genre;
}

export enum genre{
  FANTASY = 'Fantasy',
  SCIENCEFICTION = 'Sciene Fiction',
  POETRY = 'Poetry',
  CLASSICS= 'Classics',
  GRAPHICNOVEL= 'Graphic Novel',
  DETECTIVE= 'Detective',
  HISTORICALFICTION= 'Historical Fiction',
  HORROR= 'Horror',
  LITERARYFICTION= 'Literary Fiction',
  ROMANCE= 'Romance',
  SHORTSTORIES= 'Short Stories',
  THRILLER= 'Thriller',
  BIOGRAPHIES= 'Biography',
  COOKBOOK= 'Cookbook',
  HISTORY= 'History',
  MEMOIR= 'Memoir',
  TRUECRIME= 'True Crime',
  SELFHELP= 'Self Help'
}
