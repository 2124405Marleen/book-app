const express = require('express');
const PageCount = require("../controllers/pagecount.controller.js")
const router = express.Router();
const cors = require('cors');

router.get('/pagecount', cors(), async (req, res) => {
  try{
    await PageCount.getPageCount((err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
})

module.exports = router;
