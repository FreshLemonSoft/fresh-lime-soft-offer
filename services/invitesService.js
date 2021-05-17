const User = require('../models/user');

class InvitesService {
    getUserById = async(id) => {
        try {
            return User.findById(id);
        } catch (e) {
            console.log(e);
        }
    };
}

module.exports = new InvitesService();