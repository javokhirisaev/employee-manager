//Step2
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

//Step3
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); 
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`;
  }
}

//Step4
const employee1 = new Employee("Ali", "Sales");
const employee2 = new Employee("Fatima", "HR");
const manager1 = new Manager("Hassan", "Engineering", 10);
const manager2 = new Manager("Layla", "Marketing", 5);
