const express = require("express");

const app = express();

const students = [];

//Track ID
let Identification = 0;

//InBuild Middleware for Access Body
app.use(express.json());

//All Students
app.get("/", (req, res) => {
    
    res.status(200).json({
        success: true,
        student: students
    });
});

//Get single Student
app.get("/student/:id", (req, res) => {

    const id = req.params.Identification;
    const student = students.find((s) => s.id === id);

    res.status(200).json({
        success: true,
        student
    });
})

//Create Students
app.post("/", (req, res) => {
    
    Identification++;

    const {name, age, dept} = req.body;
    const student = {
         Identification,
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