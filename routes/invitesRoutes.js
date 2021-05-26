const {Router} = require('express');
const controller = require('../controllers/invitesController');
const auth = require('../middleware/authMiddleware');

const router = Router();

router.get('/:id', auth, controller.getUserById);

module.exports = router;