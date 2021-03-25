const pageCount = require('../models/pagecount.model.js')

exports.getPageCount = async OnComplete => {
  return await pageCount.getPageCount((err, data) => {
    if(err) {
      console.log("controle error");
      return OnComplete(err,null);
    } else {
      console.log('Got page count');
      return OnComplete(null, data);
    }
  });
};
