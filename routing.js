const express = require('express');
const router = express.Router();
const test = require("./controller");


router.get('/moe',test.moe);
router.get('/test',test.test);
module.exports = router;