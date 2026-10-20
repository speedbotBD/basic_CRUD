const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Conected Successfully");

    } catch (err) {
        console.log("Database Not Conected: ", err.message);
        process.exit(1);
    }
    
}

module.exports = connectDB;