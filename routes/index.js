const express = require('express');
const router = express.Router();
const register = require('../middleware/validateRegistrationForm');
const ControlerRegistratrion = require('../controller/registration/registrationController');

let controlerReg = new ControlerRegistratrion;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.post('/register',register, controlerReg.registration);

module.exports = router;
