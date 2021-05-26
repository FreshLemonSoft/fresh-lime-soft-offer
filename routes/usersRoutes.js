const {Router} = require('express');
const controller = require('../controllers/usersController');
const auth = require('../middleware/authMiddleware');

const router = Router();

router
    .get('/', controller.getAll)
    .post('/', auth, controller.addNewUser)

module.exports = router;