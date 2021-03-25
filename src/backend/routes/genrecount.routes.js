const express = require('express');
const genreCount = require("../controllers/genrecount.controller.js")
const router = express.Router();
const cors = require('cors');

router.get('/genre/count', cors(), async (req, res) => {
  try{
    await genreCount.getCountByGenre((err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
})

module.exports = router;
