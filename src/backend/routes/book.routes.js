const express = require('express');
const Books = require("../controllers/book.controller.js")
const router = express.Router();
const cors = require('cors');



router.get('/books', cors(), async (req,res) => {

  try {
    console.log('Try to find Books');
    //Callback function
    // Promises

    await Books.findAll((err, data) => {
      console.log(data);
      res.send(data);
    });
    // console.log('got books');
    // console.log(books);
    // res.send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send()
  }
})

// router.post('/book', async (req,res) => {
//
//   try {
//     const user= await User.create({
//       name: req.body.name
//     })
//
//     res.status(201).send(user)
//   } catch (error) {
//     res.status(400).send(error)
//
//   }
// })

module.exports = router;


// module.exports = app => {
//   const books = require("../controllers/book.controller.js");

//   app.get("/books", books.getAll);
// }
