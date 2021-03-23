const fs = require('fs').promises;

const express = require('express');
const bodyParser = require('body-parser');
const Book = require("./models/book.model");
const cors = require('cors');
const app = express();

// require("./routes/book.routes.js")(app);
app.use(cors());

const port = 3000;
const bookRouter = require('./routes/book.routes');

app.use(bookRouter);
// app.get('/', function (req, res) {
//   var dbresult = Book.findAll();
//   res.send(dbresult);
// });

app.listen(
  port,
  () => console.log(`app listening at http://localhost:${port}`)
);
