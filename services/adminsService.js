const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminsService {
    registerNewAdmin = async(admin) => {
        try {
            console.log(admin);
            const hashPass = await bcrypt.hash(admin.password, 10);
            const newUser = new Admin({
                name: admin.name,
                phone: admin.phone,
                password: hashPass,
            });
            await newUser.save();
        } catch (e) {
            console.log(e);
        }
    };
    login = async(name, password) => {
        try {

            const admin = await Admin.findOne({name});
            if (admin) {
                const check = await bcrypt.compare(password, admin.password);
                if (check) {
                    const token = jwt.sign({name}, 'secretKey');
                    return {
                        token: token,
                        HRcontactPhone: admin.phone,
                    };
                } else {
                    return {
                        message: "wrong password",
                    };
                }
            } else {
                return {
                    message: "Admin not found",
                };
            }
        } catch (e) {
            console.log(e);
        }
    };
}

module.exports = new AdminsService();