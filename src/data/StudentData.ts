import Student from "../model/Student";
import BaseDataBase from "./basedataBase";



export class studentData extends BaseDataBase {
    async insertStudent(Student:Student): Promise<void> {
        await this.getConnetion()
        .insert({
        id: Student.getId(),
        name: Student.getName(),
        email: Student.getEmail(),
        birthdate: Student.getBirthdate(),
        classId: Student.getClassId(),
        })
        .into("estudante")
    }
} 