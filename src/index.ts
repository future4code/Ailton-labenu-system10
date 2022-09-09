import { application } from "express";
import { app } from "./app";
import { ClassController } from "./enpoints/ClassController";
import { StudentController } from "./enpoints/StudentController";

const classController = new ClassController();
const studentController = new StudentController();



app.post("/class", classController.createClass);

app.get("/allclasses", classController.getClass);

app.put("/classChange",classController.changeModule);

app.post("/students", studentController.createStudent)