import { Request, Response } from "express";
import { classData } from "../data/classData";
import { studentData } from "../data/StudentData";
import Student from "../model/Student";
import moment from "moment";

export class StudentController {
  async createStudent(req: Request, res: Response) {
    const alunoId = new Date().getTime().toString();
    try {
      const { name, email, data_nasc, turma_id } = req.body;
      //   const dados = req.body;
      //   console.log(dados);

      if (!name || !email || !data_nasc || turma_id) {
        throw new Error(" Todos os campos são obrigatórios!!");
      }

      const estudanteData = new studentData();
      const turmaData = new classData();

      const dataConvertida = moment(data_nasc, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      );
      const id = Date.now().toString();
      const estudante = new Student(name, email, data_nasc, turma_id, id);
      const response = await estudanteData.insertStudent(estudante);

      res.status(201).send({ message: response });
      console.log(response);

      //   const student = new Student(alunoId, name, email, data_nasc, classId);

      //   const StudentData = new studentData();

      //   const resposta1 = await StudentData.insertStudent(student);

      //   res.status(201).send({ message: resposta1 });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async buscar(req: Request, res: Response) {
    try {
      const name = req.params.name;

      const estudante = new studentData();

      const buscarEstudante = await estudante.buscarEstudantePorNome(name);
      console.log(buscarEstudante);

      if (!buscarEstudante) {
        throw new Error("Usuario não encontrado!!!");
      }

      res.status(200).send(buscarEstudante);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}
