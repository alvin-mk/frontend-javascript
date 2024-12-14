import { Cpp, Java, React, Teacher } from './subjects';

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());