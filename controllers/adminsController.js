const adminsService = require('../services/adminsService');

class AdminsController {
    service = adminsService;
    registerNewAdmin = async (req, res) => {
        await this.service.registerNewAdmin(res, req.body);
    };
    login = async (req, res) => {
        await this.service.login(res, req.body.name, req.body.password);
    };
}

module.exports = new AdminsController();