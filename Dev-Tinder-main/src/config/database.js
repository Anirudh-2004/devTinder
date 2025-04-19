const mongoose = require("mongoose");

const connectDb = async()=>{
    await mongoose.connect(
        "mongodb+srv://sumitkumar:eXCzGAZCL32PX2cL@namastenode.ttz6j.mongodb.net/devTinder"
    );
}

module.exports = connectDb;

