const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersRoutes');
const invitesRoutes = require('./routes/invitesRoutes');

const PORT = 9000;
const app = express();

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/invites', invitesRoutes);

const start = async() => {
    try {
        await mongoose.connect(`mongodb+srv://dzuiko:23n0euUJ2ba7EMh8@offer.pzttf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}
start();