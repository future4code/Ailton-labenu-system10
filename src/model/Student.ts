class Student {
  private id: string;
  private name: string;
  private email: string;
  private data_nasc: string;
  private turma_id: string | null;

  constructor(
    id: string,
    name: string,
    email: string,
    data_nasc: string,
    turma_id: string | null
  ) {
    (this.id = id), (this.name = name);
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
    this.id = id;
  }
  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getBirthdate() {
    return this.data_nasc;
  }

  getClassId() {
    return this.turma_id;
  }
}

export default Student;
