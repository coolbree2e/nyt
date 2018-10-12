const router = require('express').Router();
const nytController = require('../../controllers/nytController');

router.route('/')
.get(nytController.findAll)
.post();

router.route('/:id')
.get()
.delete();

module.exports = router;
