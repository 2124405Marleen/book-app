const book = require("../models/book.model");

exports.findAll = async OnComplete => {
  return await book.getAll((err, data) => {
    if (err) {
      return OnComplete(err,null);
      // res.status(500).send({
      //   message:
      //     err.message || "Some error occured while retrieving books."
      // });
    } else {
      console.log('got data')
      console.log(data);
      return OnComplete(null, data);
    } //res.send(data);
  });
};


