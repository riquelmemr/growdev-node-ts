import { createStudent, deleteStudent, updateStudent, listStudents } from './features/students';

const student = {
  enrollment: 123123123,
  name: 'Riquelme Maia Rodrigues',
  age: 18,
}

createStudent(student);
