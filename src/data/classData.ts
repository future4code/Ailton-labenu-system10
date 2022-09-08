import Class from "../model/Class";
import BaseDataBase from "./basedataBase";

export class classData extends BaseDataBase {
  async insertClass(Classe: Class): Promise<void> {
    await this.getConnetion()
      .insert({
        id: Classe.getIdClass(),
        nome: Classe.getNameClass(),
        modulo: Classe.getModuloClass(),
      })
      .into("Turma");
  }
}
