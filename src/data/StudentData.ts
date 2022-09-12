import Student from "../model/Student";
import BaseDataBase from "./basedataBase";

export class studentData extends BaseDataBase {
  async insertStudent(Student: Student): Promise<string> {
    await this.getConnetion()
      .insert({
        id: Student.getId(),
        name: Student.getName(),
        email: Student.getEmail(),
        data_nasc: Student.getBirthdate(),
        turma_id: Student.getClassId(),
      })
      .into("estudante");

    return `Estudante com nome: '${Student.getName}' criado com sucesso!!`;
  }

  async buscarEstudantePorNome(name: string) {
    const result = await this.getConnetion()
      .select("*")
      .from("estudante")
      .where({ name });

    if (!result.length) {
      return undefined;
    }
    return new Student(
      result[0].name,
      result[0].email,
      result[0].data_nasc,
      result[0].turma_id,
      result[0].id
    );
  }
}
