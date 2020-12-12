var express = require('express');
var router = express.Router();
const {URL_SAVE_E_LEARNING_DATA, GET_URL_FILTER_DATA} = require('../constants/url-constants')
const { saveElearningData, getElearningFilterData } = require('../controller/e-learning')

router.post(URL_SAVE_E_LEARNING_DATA, saveElearningData);
router.get(GET_URL_FILTER_DATA, getElearningFilterData);

module.exports = router