const {Router} = require('express');
const controller = require('../controllers/usersController');
const auth = require('../middleware/authMiddleware');

const router = Router();

router
    .get('/', auth, controller.getAll)
    .post('/', auth, controller.addNewUser);

module.exports = router;