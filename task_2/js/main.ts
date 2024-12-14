// Interfaces for Employee Types
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director Class Implementation
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher Class Implementation
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to Create Employee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Function to Check if Employee is a Director
  function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
  }
  
  // Function to Execute Work Based on Employee Type
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
  }
  
  // String Literal Type for Subjects
  type Subjects = 'Math' | 'History';
  
  // Function to Teach Class
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    }
    return 'Teaching History';
  }
  
  // Example Usage and Console Outputs
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director
  
  console.log(executeWork(createEmployee(200))); // Getting to work
  console.log(executeWork(createEmployee(1000))); // Getting to director tasks
  
  console.log(teachClass('Math')); // Teaching Math
  console.log(teachClass('History')); // Teaching History