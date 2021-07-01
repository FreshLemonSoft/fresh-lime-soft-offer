const User = require('../models/user');

class UsersService {
    getAll = async() => {
        return User.find();
    };
    addNewUser = async(user) => {
        try {
            const newUser = await new User({
                offerType: user.offerType,
                text: user.text,
                HRcontactPhone: user.HRcontactPhone,
                telegram: user.telegram,
            });
            await newUser.save();
            return  {
                id: newUser._id,
                URL: `https://www.freshlimesoft.com/newOffer/${newUser._id}`,
            };
        } catch (e) {
            console.log(e);
        }
    };
}

module.exports = new UsersService();