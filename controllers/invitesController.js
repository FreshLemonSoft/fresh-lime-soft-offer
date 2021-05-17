const invitesService = require('../services/invitesService');

class InvitesController {
    service = invitesService;
    getUserById = async(req, res) => {
        res.status(200).send(await this.service.getUserById(req.params.id));
    };
}

module.exports = new InvitesController();