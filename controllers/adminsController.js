const adminsService = require('../services/adminsService');

class AdminsController {
    service = adminsService;
    registerNewAdmin = async (req, res) => {
        res.status(201).send(await this.service.registerNewAdmin(req.body));
    };
    login = async (req, res) => {
        res.status(201).send(await this.service.login(req.body.name, req.body.password));
    };
}

module.exports = new AdminsController();