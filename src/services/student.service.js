//const students = require("../data/students");
const Student = require("../models/student");

//Get All Student
const getAllStudentService = async () => {
     
    return await Student.find();
}

//Get Single Student
const getStudentService = async (id) => {

    return await Student.findById(id);
}

//Create Student
const postStudentService = async (name, age, dept) => {

    const student = await Student.create({name, age, dept});
    return student;
}

//Delete Student
const deleteStudentService = async (id) => {

    const student = await Student.findByIdAndDelete(id);
    return student;
}

//Update Student
const updateStudentService = async (id, name, age, dept) => {

    const student = await Student.findByIdAndUpdate(
        id,
        {
            name: name,
            age: age,
            dept: dept
        },
        {
            new: true,
            runValidators: true
        }
    )
    return student;
}

module.exports = {
    getAllStudentService,
    getStudentService,
    postStudentService,
    deleteStudentService,
    updateStudentService
}           