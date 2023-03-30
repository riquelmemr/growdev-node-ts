import { StudentDTO } from "../../entities/student.entity";

function createStudent(student: StudentDTO) {
  console.log(student.name);
}

export default createStudent;
