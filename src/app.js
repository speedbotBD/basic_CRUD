require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

//InBuild Middleware for Access Body
app.use(express.json());

//use morgan
app.use(morgan("dev"));

//Import Modules
const { getStudentAll,
        getStudent,
        postStudent,
        deleteStudent,
        updateStudent
      } = require("./controllers/student.controller");
//const { connect } = require("mongoose");


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
   
    console.log(err.message);
   
   res.status(500).json({
    success: false,
    message: "Internal Error"
   });
   
});

//Server PORT
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {

        await connectDB();
        
        app.listen(PORT, () => {
            console.log(`Server is Running On PORT: ${PORT}`);
        })
    } catch(err) {

        console.log(`Faild to Start Server`, err.message);
        process.exit(1);
    }
}

startServer();