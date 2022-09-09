class Student {
  private id: string;
  private name: string;
  private email: string;
  private birthdate: Date;
  private classId: string | null;

  constructor(
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    classId: string | null
  ) {
    (this.id = id),
      (this.name = name),
      (this.email = email),
      (this.birthdate = birthdate),
      (this.classId = classId);
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
    return this.birthdate;
  }

  getClassId() {
    return this.classId;
  }
}

export default Student;
