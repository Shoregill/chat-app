const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    created: {
        type: Date,
        required: [true, "Create date is required"]
    }
})

module.exports=userSchema