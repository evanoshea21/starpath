const router = require('express').Router();
const Users = require('./controllers/Users.js');
const Trades = require('./controllers/Trades.js');

router.get('/users', Users.getUser);
router.post('/trades', Trades.getTrades);

module.exports = router;
