import { Request, Response } from "express";
import { classData } from "../data/classData";
import Class from "../model/Class";

export class ClassController {
  async createClass(req: Request, res: Response) {
    const turmaId = new Date().getTime().toString()
    try {
      const { nome, modulo } = req.body;

      if (  !nome || !modulo) {
        throw new Error(" Todos os campos são obrigatórios!!");
      }

      const classe = new Class(turmaId, nome, modulo);

      const ClasseData = new classData();

      const resposta1 = await ClasseData.insertClass(classe);

      res.status(201).send({ message: resposta1 });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async getClass(req: Request, res: Response) {
    try {
      const classesData = new classData();

      const allClasses = await classesData.selectClass();

      if (!allClasses.length) {
        throw new Error("Não há nenhuma turma cadastrada!");
      }
      res.status(200).send(allClasses);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async changeModule(req: Request,res: Response) {
    try {
      const {id,nome,module} = req.body

      if(!id || !module){
        throw new Error(" Todos os campos são obrigatórios!");
      }

      const classe = new Class(id,nome,module)

     const ClassesData = new classData();
    
      const changeClass = await ClassesData.changeModule(classe);
       
      res.status(200).send(changeClass)



    } catch (error:any) {
      res.status(500).send({ message: error.message });
      
    }
  }
}
