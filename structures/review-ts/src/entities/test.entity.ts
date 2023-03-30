interface ITeacher {
  name: string;
  school: string;
  class: string;
}

interface ITeacherSubstitute extends ITeacher {
  stages: string[];
}

const teacher: ITeacherSubstitute = {
  name: 'Teacher 1',
  school: 'Growdev',
  class: 'Third One',
  stages: ['Growdev', 'Rui Barbosa']
}

// ----------------------------------------------------------------

type IUser = {
  name: string;
  email: string;
  id: string;
}

type IUserProfessional = {
  addresses: string[];
}

type IUsers = IUser & IUserProfessional

const users: IUsers = {
  name: 'Anonymous',
  email: 'anonymous@gmail.com',
  id: '1234567',
  addresses: ['Campo Bom', 'Novo Hamburgo']
}

