import { application } from "express";
import { app } from "./app";
import { ClassController } from "./enpoints/ClassController";

const classController = new ClassController();

app.post("/class", classController.createClass);
app.get("/allclasses", classController.getClass);
app.put("/allclasses/:id/module", classController.changeModule);

