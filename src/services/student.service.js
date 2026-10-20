const students = require("../data/students");

//Get All Student
const getAllStudentService = () => {
     
    return students;
}

//Get Single Student
const getStudentService = (id) => {

    const student = students.find((s) => s.id === id);
    return student;
}

//Create Student
const postStudentService = (id, name, age, dept) => {

    const student = {
        id,
        name,
        age,
        dept

    }

    return student;
}

//Delete Student
const deleteStudentService = (id) => {

    const index = students.findIndex((s) => s.id === id);
    return index;
}

//Update Student
const updateStudentService = (id) => {

    const student = students.find((s) => s.id === id);
    return student;
}

module.exports = {
    getAllStudentService,
    getStudentService,
    postStudentService,
    postStudentService,
    deleteStudentService,
    updateStudentService
}