const sql = require("../db.js");

//constructor
const Book = function (book){
  this.ISBN = book.ISBN;
  this.BookName = book.BookName;
  this.Rating = book.Rating;
};

Book.getAll = async result => {
  await sql.query("SELECT * FROM books", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("books: ", res);
    result(null, res);
  });
}
module.exports = Book;