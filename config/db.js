const mongoose = require("mongoose");

const dbconnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (e) {
        console.log("Error=" + e)
    }

}
exports.connection = dbconnection;