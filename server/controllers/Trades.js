const db = require('../db');

module.exports = {

  getTrades: async function(req,res) {
    var userID = req.body.userID;

    const qString = `SELECT * from trades WHERE proposer_id=${userID} OR receiver_id=${userID};`;
    db.query(qString, function(err, results) {
      if(err) {
        console.log(err);
        res.status(500).send(err);
        return;
      }
      res.status(200).send(results);
    })
  },

};