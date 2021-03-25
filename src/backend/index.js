const fs = require('fs').promises;

const express = require('express');
const cors = require('cors');
const app = express();

// require("./routes/book.routes.js")(app);
app.use(cors());

const port = 3000;
const bookRouter = require('./routes/book.routes');
const genreCountRouter = require('./routes/genrecount.routes');
const pageCountRouter = require('./routes/pagecount.routes');

app.use(bookRouter);
app.use(genreCountRouter);
app.use(pageCountRouter);
// app.get('/', function (req, res) {
//   var dbresult = Book.findAll();
//   res.send(dbresult);
// });

app.listen(
  port,
  () => console.log(`app listening at http://localhost:${port}`)
);
