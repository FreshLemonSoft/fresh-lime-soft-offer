const {Router} = require('express');
const controller = require('../controllers/invitesController');
const router = Router();

router.get('/:id', controller.getUserById);

module.exports = router;