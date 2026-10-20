require("dotenv").config();

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

//Error Middleware
app.use((err, req, res, next) => {

   res.status(500).json({
    success: false,
    message: "Internal Error"
   });
   
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
});