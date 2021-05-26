const usersService = require('../services/usersService');

class UsersController {
    service = usersService;
    getAll = async(req, res) => {
        res.status(200).send(await this.service.getAll());
    };
    addNewUser = async(req, res) => {
        res.status(200).send(await this.service.addNewUser(req.body));
    };
}

module.exports = new UsersController();