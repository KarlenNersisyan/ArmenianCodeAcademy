# Tasks

- [Code Requirement List](https://docs.google.com/document/d/1ruDwdOAXNmJ1WVu5gevdJzh9nbjchpPxpOtAEBbqdrs/edit)

# Required Tasks

_Note, setters in all tasks should do some validations_

## Task 1

Create an _Author class_ and a _Book class_.

_Author_ should have:

- fields

  - name
  - email
  - gender

- methods
  - getters for fields
  - toString()

_Book_ should have:

- fields
  - title
  - author(Author)
  - price
  - quantity
- methods
  - getters for fields
  - setters for fields
  - getProfit() - which calculates the profit from the book based on the price and quantity.
  - toString()

## Example

```
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

## Task 2

Create an _Account_ class. _Account_ should have:

- fields

  - id
  - name
  - balance

- getters for fields
- setters - for name and balance
- credit(amount) - which should add amount to balance and return the updated balance.
- debit(amount) - which should subtract the amount from the balance, if amount is less than the
  balance, otherwise output “Amount exceeded balance.”
- transferTo(anotherAccount, amount) - which should subtract the amount from the account
  balance and add it to the given anotherAccount and return the updated balance, if amount is less
  than the balance, otherwise output “Amount exceeded balance.”
- static method: identifyAccounts(accountFirst, accountSecond) - which gets two accounts
  and identifies if they are the same or not comparing all fields.
- toString()

### Example

```
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.
```

## Task 3

Write classes: _Person_ class and _Student_ class. _Person_ should have:

- fields
  - firstName
  - lastName
  - gender
  - age
- methods

  - getters for fields
  - setters for fields
  - toString()

```
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

_Student_ is inherited from _Person_. It should have

- fields
  - year
  - fee
  - program(array of { programName, grade })
- methods

  - getters for fields
  - setters for fields
  - passExam(programName, grade)
  - isAllPassed()
  - toString()

_Student_ should contain the data about its programs and exams.

- passExam will update that data, so if student passed all the exams(grade is great or equal to
  50), its year should be increased by one.
- It should have a method isAllPassed().

#### Example of program array:

```
[
{ programName: "math", grade: 10 },
{ programName: "english", grade: undefined },
];
```

## Task 4

Describe a model of a library. For that define classes: _Library, Reader, Book_.

To create correct hierarchies and connections, you should have a subclasses of _Book_ such as
_LibraryBookBase, LibraryBook, ReaderBook._

_Book_ should have

- fields
  - title string
  - author string
- methods
  _ getters for fields
  _ toString() \* isTheSameBook(book) - which returns true if the book title and author is the same with the
  current instance, false, otherwise.

_LibraryBookBase_ should have

- fields
  - title - string
  - author - string
  - bookId - number
- methods
  - getters for fields
  - toString()

_LibraryBook_ should have

- fields

  - title - string
  - author - string
  - bookId - number
  - quantity - number

- methods

      * getters for fields
      * setters for appropriate fields
      * toString()
      * increaseQuantityBy(amount - number) - increases the quantity of the book by the given

  amount. \* decreaseQuantityBy(amount - number) - decrease the quantity of the book by the given
  amount.

_ReaderBook_ should have

- fields
  - title - string
  - author - string
  - bookId - number
  - expirationDate - string
  - isReturned - boolean
- methods
  _ getters for fields
  _ setters for appropriate fields
  * toString()
  *Reader\* should have

- fields
  - firstName - string
  - lastName - string
  - readerId - number
  - books - Array of ReaderBook
- methods
  _ getters for fields
  _ setters for appropriate fields
  _ toString()
  _ borrowBook(book - Book, library - Library) - requests a book from the library. If
  returned book is not a null and is a type of ReaderBook, pushes it to the books.

_Library_ should have

- fields
  - books - Array of LibraryBook
  - readers - Array of Readers
- methods
  _ getters for fields
  _ doHaveBook(requestedBook - Book) - returns true if library has the book, false otherwise.
  _ addBook(newBook - Book) - add new book to the library. If the book already exists, increases
  its quantity, otherwise adds new book of type LibraryBook.
  _ addBooks(newBooks) - add new books to the library with the same logic as the addBook.
  Returns changed array of the books.
  _ checkReaderId(readerId) - returns true if there exist a reader with the given id, otherwise
  returns false.
  _ lendBook(book - Book, readeId) - checks whether the book exists and there is at least
  one at the library. Checks whether library has a reader with the given id. If the both are true,
  returns a book of type ReaderBook.

## Literature

- [Classes](https://javascript.info/classes)
- [OOP in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [OOP in JavaScript](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)
