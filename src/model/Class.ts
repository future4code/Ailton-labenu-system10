class Class {
  private id: string;
  private name: string;
  private module: number;

  constructor(id: string, name: string, module: number) {
    (this.id = id), (this.name = name), (this.module = module);
  }

  getIdClass() {
    return this.id;
  }

  getNameClass() {
    return this.name;
  }

  getModuloClass() {
    return this.module;
  }
}

export default Class;
