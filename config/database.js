const mongoose = require('mongoose');
//Set up default mongoose connection


const connectDatabase = ()=>{
    mongoose.set('strictQuery', true);
    
    mongoose.connect(process.env.DB_URI).then((data) => {
        console.log(`Mongodb connected with the server: ${data.connection.host}`);
    })

};

module.exports = connectDatabase