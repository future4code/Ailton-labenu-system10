import Class from "../model/Class";
import BaseDataBase from "./basedataBase";

export class classData extends BaseDataBase {
  async insertClass(Classe: Class): Promise<void> {
    await this.getConnetion()
      .insert({
        id: Classe.getIdClass(),
        name: Classe.getNameClass(),
        module: Classe.getModuloClass(),
      })
      .into("ClassLabenu");
  }

  async selectClass(){
    const result = await this.getConnetion().select("*").from("ClassLabenu")
    return result

  }  

  async changeModule(Class:Class):Promise<any>
  {
    await this.getConnetion()
    .update({module: Class.getModuloClass()})
    .where({id: Class.getIdClass()})
    .into("ClassLabenu")
  }
}
