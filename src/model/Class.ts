class Class {
  private id: string;
  private nome: string;
  private modulo: number;

  constructor(id: string, nome: string, modulo: number) {
    (this.id = id), (this.nome = nome), (this.modulo = modulo);
  }

  getIdClass() {
    return this.id;
  }

  getNameClass() {
    return this.nome;
  }

  getModuloClass() {
    return this.modulo;
  }
}

export default Class;
