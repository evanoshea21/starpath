const router = require('express').Router();
const {
  Users,
  Trades
} = require('./controllers');

router.get('/users', Users.getUser);
router.post('/trades', Trades.getTrades);

module.exports = router;
