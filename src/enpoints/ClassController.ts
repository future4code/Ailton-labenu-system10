import { Request, Response } from "express";
import { classData } from "../data/classData";
import Class from "../model/Class";

export class ClassController {
  async createClass(req: Request, res: Response) {
    try {
      const { nome, modulo } = req.body;

      if (!nome || !modulo) {
        throw new Error(" Todos os campos são obrigatórios!!");
      }

      const Classe = new Class(Date.now().toString(), nome, modulo);

      const ClasseData = new classData();

      const resposta1 = await ClasseData.insertClass(Classe);

      res.status(201).send({ message: resposta1 });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}
