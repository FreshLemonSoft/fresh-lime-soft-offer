const {Router} = require('express');
const controller = require('../controllers/usersController');
const router = Router();

router
    .get('/', controller.getAll)
    .post('/', controller.addNewUser);

module.exports = router;