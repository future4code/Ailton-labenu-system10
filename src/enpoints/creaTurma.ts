import {Request, Response} from "express"
import createClass from "../data/createClass"

const createTurma = async (req:Request, res:Response) => {
  try{
    const{name, modulo} = req.body

      if(!name || !modulo){
      res.statusCode = 400
      throw new Error("Você deve passar o nome da turma e o modulo atual em que ela esta")
      }

      if(typeof name !== "string" ){
        throw new Error("O tipo passado deve String")
      }

      if(typeof name !== "string" ){
        throw new Error("O tipo passado deve String")
      }
      await createClass(name, modulo)
      res.status(200).send("Turma cadastrada com sucesso")
  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
  })
  }
}

export default createTurma