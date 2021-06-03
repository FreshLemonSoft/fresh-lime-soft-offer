const User = require('../models/user');

class UsersService {
    getAll = async() => {
        return User.find();
    };
    addNewUser = async(user) => {
        try {
            const newUser = await new User({
                offerType: user.offerType,
                name: user.name,
                rank: user.rank,
                mainSalary: user.mainSalary,
                qualifyingSalary: user.qualifyingSalary,
                traineeSalary: user.traineeSalary,
                qualifyingPeriod: user.qualifyingPeriod,
                traineePeriod: user.traineePeriod,
                vacancyLink: user.vacancyLink,
                appointmentDate: user.appointmentDate,
                meetPerson: user.meetPerson,
                contactPhone: user.contactPhone,
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