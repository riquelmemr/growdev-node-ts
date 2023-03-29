import users from "./arrays/users";
import User from "./class/user"
import getAverage from "./modules/average";
import validateNote from "./modules/notes";

// Variables
const nome: string = 'Riquelme';
const number: number = 10;
console.log(nome, number);

// Using array of users of interface IUser
users.forEach(user => console.log(user.name));

// Using class of interface IUser imported
const user = new User('Riquelme', 18, 'rique@gmail.com');
console.log(user);

// Using the function getAverage
const average = getAverage(10, 5);
console.log(average);

// Validating note
const note = validateNote(7);
console.log(note);