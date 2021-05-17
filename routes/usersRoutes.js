const {Router} = require('express');
const controller = require('../controllers/usersController');
const router = Router();

router.post('/', controller.addNewUser);

module.exports = router;