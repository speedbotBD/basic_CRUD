const students = require("../data/students");

//Track ID
let val = 0;

//Get All Student
const getStudentAll =  (req, res) => {
    
    res.status(200).json({
        success: true,
        student: students
    });
}

//Get Single Student
const getStudent = (req, res) => {

    const id = Number(req.params.id); //req.params.id => String
    const student = students.find((s) => s.id === id);

    if(!student) {
        return res.status(404).json({
            success: false,
            message: "Student Not Found"
        });
    }

    res.status(200).json({
        success: true,
        student: student
    });
}

//Create Student
const postStudent = (req, res) => {
    
    val++;
    const id = val;

    const {name, age, dept} = req.body;
    const student = {
         id,
         name,
         age,
         dept
    }

    students.push(student);

    res.status(201).json({
        success: true,
        student
    })
}

//Delete Student
const deleteStudent = (req, res) => {
    

    const id = Number(req.params.id); //req.params.id => String
    const index = students.findIndex((s) => s.id === id);
    
    if(index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student Not Found"
        });
    }

    students.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    });
    
}

//Update Student
const updateStudent = (req, res) => {
   
    
    const id = Number(req.params.id); //req.params.id => String

    const {name, age, dept} = req.body;

    const student = students.find((s) => s.id === id);

    student.name = name;
    student.age = age;
    student.dept = dept;

    res.status(200).json({
        success: true,
        student
    });
}





module.exports = {
    getStudentAll,
    getStudent,
    postStudent,
    deleteStudent,
    updateStudent
}