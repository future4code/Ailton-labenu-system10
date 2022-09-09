import { Turma } from "../types";


const createClass = async (name:string, modulo:string): Promise<void> =>{
  let  id = Date.now().toString()
  

  const response: Turma = {
    id: id,
    name: name,
    modulo:modulo
  }
  await connection("Turmas").insert(response)
}

export default createClass