const sql = require("../db.js");

//constructor
const Book = function (book){
  this.ISBN = book.ISBN;
  this.BookName = book.BookName;
  this.Rating = book.Rating;
  this.AuthorId = book.AuthorId;
  this.Pages - book.Pages;
  this.GenreID = book.GenreID;
};

Book.getAll = async result => {
  await sql.query("SELECT * FROM `books`", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("books: ", res);
    result(null, res);
  });
}


Book.AddAuthor = async (name, gender, result) => {

  sql.query("INSERT INTO `authors` (`AuthorId`, `Name`, `Gender`) VALUES (NULL, ? , ?)", [name, gender], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("author: ", res);
    result(null, res);
  });
  result("dikke ok");
}
module.exports = Book;
