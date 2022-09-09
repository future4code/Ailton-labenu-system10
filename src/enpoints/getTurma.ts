import {Request, Response} from "express"
import getClass from "../data/getcClass"

const getTurma = async(req:Request, res:Response): Promise<void> =>{
  try{
    const response = await getClass()
    res.statusCode = 200
    res.send(response)
  }catch(error:any){
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}

export default getTurma