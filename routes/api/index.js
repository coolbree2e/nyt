const router = require('express').Router();
const nytRoutes = require('./article');

router.use('/article',nytRoutes);

module.exports = router;
