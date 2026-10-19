const express = require("express");

const app = express();

//InBuild Middleware for Access Body
app.use(express.json());

//Import Modules
const { getStudentAll,
        getStudent,
        postStudent,
        deleteStudent,
        updateStudent
      } = require("./controllers/student.controller");

//const students = require("./data/students");

//All Students
app.get("/student", getStudentAll);

//Get single Student
app.get("/student/:id", getStudent);

//Delete student
app.delete("/student/:id", deleteStudent);

//Update Student
app.put("/student/:id", updateStudent);

//Create Students
app.post("/student", postStudent);

app.listen(5000, () => {
    console.log("Server Run on PORT: 5000");
});