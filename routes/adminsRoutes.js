const {Router} = require('express');
const controller = require('../controllers/adminsController');

const router = Router();

router
    .post('/register', controller.registerNewAdmin)
    .post('/login', controller.login);

module.exports = router;