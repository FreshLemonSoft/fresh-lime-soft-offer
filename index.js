const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const invitesRoutes = require('./routes/invitesRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/invites', invitesRoutes);

const PORT = 9000;

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