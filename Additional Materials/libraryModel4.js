class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw new Error("name is not valid");
    }

    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string") {
      throw new Error("name is not valid");
    }

    this._author = value;
  }

  toString() {
    return `${this._author} -> ${this._title}`;
  }

  isTheSameBook(book) {
    return true ? book === this._title : false;
  }
}

class LibraryBookBase extends Book {
  constructor(title, author, bookId) {
    super(title, author);
    this._bookId = bookId;
  }

  get bookId() {
    return this._bookId;
  }

  set bookId(value) {
    if (typeof value !== "number") {
      throw new Error("This horse does not exist!");
    }

    this._bookId = value;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity) {
    super(title, author, bookId);
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (typeof value !== "number") {
      throw new Error("This horse does not exist!");
    }

    this._quantity = value;
  }

  increaseQuantityBy(amount) {
    if (typeof amount === "number") {
      return (this._quantity += amount);
    } else {
      return "Enter a number";
    }
  }

  decreaseQuantityBy(amount) {
    if (typeof amount === "number") {
      return (this._quantity -= amount);
    } else {
      return "Enter a number";
    }
  }
}

class ReaderBook extends LibraryBookBase {
  constructor(title, author, bookId, expirationDate, isReturned) {
    super(title, author, bookId);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }

  get expirationDate() {
    return this._expirationDate;
  }

  set expirationDate(value) {
    if (typeof value !== "string") {
      throw new Error("This horse does not exist!");
    }

    this._expirationDate = value;
  }

  get isReturned() {
    return this._isReturned;
  }

  set isReturned(value) {
    if (typeof value !== "boolean") {
      throw new Error("This horse does not exist!");
    }

    this._isReturned = value;
  }
}

class Reader {
  constructor(firstName, lastName, readerId, books) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = readerId;
    this._books = books;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== "string") {
      throw new Error("This horse does not exist!");
    }

    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== "string") {
      throw new Error("This horse does not exist!");
    }

    this._lastName = value;
  }

  get readerID() {
    return this._readerID;
  }

  set readerID(value) {
    if (typeof value !== "number") {
      throw new Error("This horse does not exist!");
    }

    this._readerID = value;
  }

  get books() {
    return this._books;
  }

  set books(value) {
    if (!Array.isArray(value)) {
      throw new Error("This horse does not exist!");
    }

    this._books = value;
  }

  borrowBook(book, library) {
    if (
      checkIfBookExist(library, book) &&
      book.__proto__ === ReaderBook.prototype
    ) {
      this.books = book;
      library.books.forEach((elem) => {
        if (elem.author === book.author && elem.title === book.title) {
          elem.decreaseQuantityBy(1);
        }
      });
    }
  }
}

class Library extends Reader {
  constructor(books, readers) {
    super(books);
    this._readers = readers;
  }

  get readers() {
    return this._readers;
  }
  set readers(book = {}) {
    this._readers.push(book);
  }

  doHaveBook(book = {}) {
    return checkIfBookExist(this.books, book);
  }

  addBook(book = {}) {
    if (checkIfBookExist(this.books, book)) {
      this.books.forEach((elem) => {
        if (elem.author === book.author && elem.title === book.title) {
          elem.increaseQuantityBy(1);
        }
      });
    } else {
      let libBook = new LibraryBook(book.author, book.title, 1);

      this.books = libBook;
    }
  }

  checkReaderId(readerId) {
    let res = [];
    this.readers.forEach((reader) => {
      if (reader.readerId === readerId) {
        res.push(true);
      }
    });
    return res.includes(true) ? true : false;
  }

  lendBook(book, readerId) {
    if (
      checkIfBookExist(this.books, book) &&
      checkIfReaderExist(this.readers, readerId)
    ) {
      return this.books.find((elem) => {
        let { author, title } = elem;
        return author === book.author && title === book.title;
      });
    }
  }
}

console.log("READER1::::::");
let book1 = new Book("1984", "George Orwell ");
let book2 = new Book("The Raven", "Edgar Allan Poe");
let book_Reader1 = [book1, book2];
let reader1 = new Reader("Karl", "Marks", book_Reader1);
console.log(reader1);

console.log("READER2::::::");
let book3 = new Book("Paige Compositor", "Mark Twain");
let book4 = new Book("The Reivers", "William Faulkner");
let book_Reader2 = [book3, book4];
let reader2 = new Reader("John", "Smith", book_Reader2);
console.log(reader2);

console.log("READERS::::::");

let readers = [reader1, reader2];
console.log(readers);
