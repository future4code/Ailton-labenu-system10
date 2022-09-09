import { Turma } from "../types"


const getClass = async () =>{
  const response = await connection.raw(`SELECT name FROM Turmas WHERE modulo != 0`)

  return response[0]
}

export default getClass