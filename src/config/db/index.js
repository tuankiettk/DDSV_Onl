const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/DDSV_Online', {
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