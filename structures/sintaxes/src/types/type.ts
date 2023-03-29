interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
}

const userTest: IUser = {
  id: 123456789,
  name: 'Riquelme',
  age: 17,
  email: 'email@example.com',
}

export { IUser, userTest };