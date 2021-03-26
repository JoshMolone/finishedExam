const mongoose = require("mongoose");
const ExamSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, "You have to supply this field"],
            // Backend Validations for max/min length 
        minLength: [3, "This field must be 3 or more characters"],
        maxLength: [25, "This field must be 6 or less characters"]
    },
    type: {
        type: String, 
        required: [true, "You have to provide a description"],
        // Backend Validations for max/min length 
        minLength: [3, "This field must be 3 or more characters"],
        maxLength: [25, "This field must be 6 or less characters"]
    },
    description: {
        type: String, 
        required: [true, "You have to provide a description"],
        // Backend Validations for max/min length 
        minLength: [3, "This field must be 3 or more characters"],
        maxLength: [255, "This field must be 6 or less characters"]
    },
    skill1: {
        type: String, 
        // required: [true, "You have to provide a description"],
        // Backend Validations for max/min length 
        // minLength: [3, "This field must be 3 or more characters"],
        maxLength: [25, "This field must be 6 or less characters"]
    },
    skill2: {
        type: String, 
        // required: [true, "You have to provide a description"],
        // Backend Validations for max/min length 
        // minLength: [3, "This field must be 3 or more characters"],
        maxLength: [25, "This field must be 6 or less characters"]    },
    skill3: {
        type: String, 
        // required: [true, "You have to provide a description"],
        // Backend Validations for max/min length 
        // minLength: [3, "This field must be 3 or more characters"],
        maxLength: [25, "This field must be 6 or less characters"]    },

})

const Exam = mongoose.model("Exam", ExamSchema )
module.exports = Exam; 