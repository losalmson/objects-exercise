import './../css/style.css'
import { createHtmlForPerson } from './htmlHelpers';
import { Person } from './models/Person';

const p = new Person("Lo", "female", "1998-12-03");
const p2 = new Person("Tilly", "female", "2001-10-17");

const siblings = [p, p2];
console.log(siblings);

for (let i = 0; i < siblings.length; i++) {
  createHtmlForPerson(siblings[i]);
}




