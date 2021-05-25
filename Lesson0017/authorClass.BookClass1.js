// Author
class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    if (typeof this._name !== "string") {
      throw new Error("name is not valid");
    }
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }

  toString() {
    return `Ms.${this._name}`;
  }
}

// Book

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this.author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get author() {
    if (typeof this._author !== "string") {
      throw new Error("This horse does not exist!");
    }
    return this._author;
  }
  set author(value) {
    if (typeof value !== "string") {
      throw new Error("This horse does not exist!");
    }
    this._author = value;
  }

  get price() {
    if (typeof this._price !== "number") {
      throw new Error("This horse does not exist!");
    }
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new Error("This horse does not exist!");
    }
    this._price = value;
  }

  get quantity() {
    if (typeof this._quantity !== "number") {
      throw new Error("This horse does not exist!");
    }
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("This horse does not exist!");
    }
    this._quantity = value;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
// let author = new Author(12);

let book = new Book("1984", "George Orwell", 7500, 1000000);

console.group();
console.log(":::Author:::");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
// console.log(author.name); // throws error
console.groupEnd();

console.log(":::BOOK:::");
console.log(book.title); // 1984
console.log(book.author); // George Orwell
console.log(book.price); // 7500
console.log(book.quantity); // 1000000
