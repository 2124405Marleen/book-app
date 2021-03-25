const sql = require("../db.js");

const PageCount = function (pageCount){
  this.Pages = pageCount.Pages;
}

PageCount.getPageCount = async onComplete => {
  await sql.query("SELECT `Pages` FROM `books`", (err, res) => {
    if (err) {
      console.log(err);
      onComplete(null, err);
      return;
    }
    console.log(res);
    onComplete(null, res);

  });
}

module.exports = PageCount;
