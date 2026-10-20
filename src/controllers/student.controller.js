const students = require("../data/students");
const { getAllStudentService,
        getStudentService,
        postStudentService,
        deleteStudentService,
        updateStudentService
      } = require("../services/student.service");


//Import models
const Student = require("../models/student");

//Track ID
let val = 0;

//Get All Student
const getStudentAll =  async (req, res) => {
    
    const student = await getAllStudentService();

    res.status(200).json({
        success: true,
        student: student
    });
}

//Get Single Student
const getStudent = async (req, res) => {

    const id = Number(req.params.id); //req.params.id => String
    const student = await getStudentService(id);

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
const postStudent = async (req, res, next) => {
    
    try{
        
    const {name, age, dept} = req.body;

    if(typeof(name) !== "string" || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Invalid Name"
        });
    }

    if(Number.isNaN(age) || typeof(age) !== "number" || (age < 1 || age > 100)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Age"
        });
    }

    if(typeof(dept) !== "string" || dept.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Invalid Dept"
        });
    }

    val++;
    const id = val;
    
    const student = await postStudentService(id, name, age, dept);

    students.push(student);

    res.status(201).json({
        success: true,
        student: student
    })
    } catch(err) {
        next(err);
    }

    
}

//Delete Student
const deleteStudent = async (req, res) => {
    

    const id = Number(req.params.id); //req.params.id => String
    const index = await deleteStudentService(id);
    
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
const updateStudent = async (req, res) => {
   
    
    const id = Number(req.params.id); //req.params.id => String

    const {name, age, dept} = req.body;

    const student = await updateStudentService(id);
    
    if(!student) {
        return res.status(404).json({
            success: false,
            message: "Student Not Found"
        });
    }

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