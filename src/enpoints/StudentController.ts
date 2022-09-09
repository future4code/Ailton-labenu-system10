import { Request, Response } from "express";
import { studentData } from "../data/StudentData";
import Student from "../model/Student";



export class StudentController { 
    async createStudent(req: Request, res: Response) {
        const alunoId = new Date().getTime().toString()
        try {
            const {name, email, birthdate, classId } = req.body
            const dados = req.body
            console.log(dados)

            if (  !name || !email || !birthdate || classId) {
                throw new Error(" Todos os campos são obrigatórios!!");
              }

              const student = new Student(alunoId,name, email, birthdate, classId);

              const StudentData = new studentData();

              const resposta1 = await StudentData.insertStudent(student);

            res.status(201).send({ message: resposta1})

        } catch (error: any) {
            res.status(500).send({ message: error.message });
          }
    }
}