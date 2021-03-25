const sql = require("../db.js");

const GenreCount = function (genreCount){
  this.total = genreCount.total;
  this.GenreName = genreCount.GenreName;
}

GenreCount.getCountByGenre = async onComplete => {
  await sql.query("SELECT count(*) as total, genre.GenreName FROM `books` as book " +
    "LEFT JOIN genres AS genre on genre.GenreID = book.GenreID group by book.GenreID", (err, res) => {
    if (err) {
      console.log(err);
      onComplete(null, err);
      return;
    }
    console.log(res);
    onComplete(null, res);

  });
}

module.exports = GenreCount;
