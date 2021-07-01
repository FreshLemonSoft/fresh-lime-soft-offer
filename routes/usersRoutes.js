const {Router} = require('express');
const controller = require('../controllers/usersController');
const auth = require('../middleware/authMiddleware');

const router = Router();

router
    .get('/', controller.getAll)
    .post('/', controller.addNewUser);

module.exports = router;