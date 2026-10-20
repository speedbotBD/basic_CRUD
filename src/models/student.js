const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema ({

    name: {
        type:     String,
        required: true,
        trim:     true
    },

    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },

    dept: {
        type: String,
        required: true,
        trim: true
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;