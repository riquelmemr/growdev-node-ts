import { IUser } from "../types/type";

class User implements IUser {
  id: number;
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.id = this.generateId();
    this.name = name; 
    this.age = age;
    this.email = email;
  }

  generateId(): number {
    const id: number = new Date().getTime();
    return id;
  }
}

export default User;
