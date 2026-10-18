const express = require("express");

const app = express();

const students = [];

//Track ID
let val = 0;

//InBuild Middleware for Access Body
app.use(express.json());

//All Students
app.get("/student", (req, res) => {
    
    res.status(200).json({
        success: true,
        student: students
    });
});

//Get single Student
app.get("/student/:id", (req, res) => {

    const id = Number(req.params.id); //req.params.id => String
    const student = students.find((s) => s.id === id);

    res.status(200).json({
        success: true,
        student: student
    });
});

//Delete student
app.delete("/student/:id", (req, res) => {

    const id = Number(req.params.id); //req.params.id => String
    const index = students.findIndex((s) => s.id === id);
    
    students.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Deleted Successfully"
    });
    
});

//Update Student
app.put("/student/:id", (req, res) => {
    
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
})

//Create Students
app.post("/student", (req, res) => {
    
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
});

app.listen(5000, () => {
    console.log("Server Run on PORT: 5000");
});