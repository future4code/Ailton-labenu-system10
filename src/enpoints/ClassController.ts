import { classData } from "./../data/classData";
import { Request, Response } from "express";
import Class from "../model/Class";

export class ClassController {
  async createClass(req: Request, res: Response) {
    try {
      const { name, module } = req.body;

      if (!name || !module) {
        throw new Error(" Todos os campos são obrigatórios!!");
      }

      const Classe = new Class(Date.now().toString(), name, module);

      const classeData = new classData();

      const resposta1 = await classeData.insertClass(Classe);

      res.status(201).send("Turma Criada com Sucesso!");
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

  async changeModule(req: Request, res: Response){
    try {
      const id = req.params.id
      const module = req.body
      
    res.status(200).send()

    } catch (error:any) {
      res.status(500).send({ message: error.message });
    }


  }
}
