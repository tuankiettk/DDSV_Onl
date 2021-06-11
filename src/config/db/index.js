const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb+srv://tuankiettk:tuankiet3008@cluster0.65hvy.mongodb.net/DDSV_Online', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully !!!');      
    } catch (error) {
        console.log('connect faild !!!');       
    }
}

module.exports = { connect }