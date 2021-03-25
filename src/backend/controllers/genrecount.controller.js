const genreCount = require('../models/genrecount.model.js')

exports.getCountByGenre = async OnComplete => {
  return await genreCount.getCountByGenre((err, data) => {
    if(err) {
      console.log("controle error");
      return OnComplete(err,null);
    } else {
      console.log('Got genre count');
      return OnComplete(null, data);
    }
  });
};
