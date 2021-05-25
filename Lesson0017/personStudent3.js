class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }

  set firstName(value) {
    if (typeof value !== "string") {
      throw new Error("name is not valid");
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== "string") {
      throw new Error("name is not valid");
    }
    this._lastName = value;
  }

  set gender(value) {
    if (value !== "boy" || value !== "girl") {
      throw new Error("There is no such gender!");
    }
    this._gender = value;
  }

  set age(value) {
    if (typeof value !== "number") {
      throw new Error("Does not exist!");
    }
    this._age = value;
  }

  toString() {
    return `${this._firstName} ${this._lastName}, ${this._age} years old`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number") {
      throw new Error("Does not exist!");
    }

    if (value > 10) {
      throw new Error("Does not exist!");
    }

    this._year = value;
  }

  get fee() {
    return this._fee;
  }

  set fee(value) {
    if (typeof value !== "number") {
      throw new Error("Does not exist!");
    }

    this._fee = value;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if (!Array.isArray(value)) {
      throw new Error("Does not exist!");
    }

    this._program = value;
  }

  passExam(programName, grade) {
    this._program.forEach((num) => {
      if (num.programName === programName) {
        num.grade = grade;
      }
    });
  }

  isAllPassed() {
    if (this._program.every((num) => num.grade >= 50)) {
      this.year += 1;
    }
  }
}

let user1 = new Person("Karl", "Mask", "male", 22);

console.log(user1.toString()); // Karl Mask, 22 years old.
console.log(user1.firstName, user1.lastName, user1.gender, user1.age);
// user1.firstName = "ACA";

let user2 = new Student("Tom", "Musk", "male", 28, 7, 8000, [
  { programName: "Math", grade: 65 },
  { programName: "Physics:", grade: undefined },
]);

// console.log(user2);
user2.passExam("Physics:", 81);
console.log(user2);
user2.isAllPassed();
console.log(user2);
