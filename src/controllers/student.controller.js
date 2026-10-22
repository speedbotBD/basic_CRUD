//const students = require("../data/students");
const { getAllStudentService,
        getStudentService,
        postStudentService,
        deleteStudentService,
        updateStudentService
      } = require("../services/student.service");


//Import models
const Student = require("../models/student");

//Get All Student
const getStudentAll =  async (req, res, next) => {
    
    try {
        const student = await getAllStudentService();

        res.status(200).json({
        success: true,
        student: student
    });
    } catch (err) {
        next(err)
    }
    
}

//Get Single Student
const getStudent = async (req, res, next) => {
    try {
        const id = req.params.id; 

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
    }catch(err) {
        next(err);
    }
    
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
 
    const student = await postStudentService(name, age, dept);

    res.status(201).json({
        success: true,
        student: student
    })
    } catch(err) {
        next(err);
    }

    
}

//Delete Student
const deleteStudent = async (req, res, next) => {
    
    try {
    const id = req.params.id; //req.params.id => String
    const student = await deleteStudentService(id);
    
    if(!student) {
        return res.status(404).json({
            success: false,
            message: "Student Not Found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    });
    } catch(err) {
        next(err);
    }

    
    
}

//Update Student
const updateStudent = async (req, res, next) => {
   
    try {
        const id = req.params.id; 

    const {name, age, dept} = req.body;

    const student = await updateStudentService(id, name, age, dept);
    
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
    } catch(err) {
        next(err);
    }
    
    
}


module.exports = {
    getStudentAll,
    getStudent,
    postStudent,
    deleteStudent,
    updateStudent
}