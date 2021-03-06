const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminsService {
    registerNewAdmin = async(res, admin) => {
        try {
            const isAdmin = await Admin.findOne({name: admin.name});
            if (!isAdmin) {
                const hashPass = await bcrypt.hash(admin.password, 10);
                const newAdmin = new Admin({
                    name: admin.name,
                    phone: admin.phone,
                    telegram: admin.telegram,
                    password: hashPass,
                });
                await newAdmin.save();
                res.json({
                    token: jwt.sign(admin.name, 'secretKey'),
                    telegram: admin.telegram,
                    HRcontactPhone: admin.phone,
                });
            } else {
                return res.status(400).json({message: "Admin with this name has already been created"});
            }
        } catch (e) {
            console.log(e);
        }
    };
    login = async(res, name, password) => {
        try {
            const admin = await Admin.findOne({name});
            if (admin) {
                const check = await bcrypt.compare(password, admin.password);
                if (check) {
                    const token = jwt.sign({name}, 'secretKey');
                    return res.json({
                        token: token,
                        telegram: admin.telegram,
                        HRcontactPhone: admin.phone,
                    });
                } else {
                    return res.status(400).json({message: "wrong password"})
                }
            } else {
                return res.status(400).json({message: "Admin not found"});
            }
        } catch (e) {
            console.log(e);
        }
    };
}

module.exports = new AdminsService();