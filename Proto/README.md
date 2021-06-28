# proto

- Try all the methods from lecture and run it with pythontutor

## Task

- Write _Pagination_ object that will get an _array_ and _pageSize_, then will return the following.
  - prevPage
  - nextPage
  - firstPage
  - lastPage
  - goToPage
  - getPageItems

```
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    Pagination.init(alphabetArray, 4);
    Pagination.getPageItems(); // ["a", "b", "c", "d"]
    Pagination.nextPage(); // add the current page by one
    Pagination.getPageItems(); // ["e", "f", "g", "h"]
    Pagination.nextPage().nextPage(); // the ability to call chainable
    Pagination.goToPage(3); // current page must be set to 3
```

## Airplane TASK:

- Write an Airplane object that initializes _name_.

- Give airplanes the ability to _.takeOff()_ and _.land()_:

  - If a plane takes off, its _isFlying_ property is set to true.
  - If a plane lands, its _isFlying_ property is set to false.

## Future lecture materials

- [All chapters](https://javascript.info/prototype-methods)
- [Prototype methods](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/this%20%26%20object%20prototypes)
- [Native Prototypes](https://javascript.info/native-prototypes)

## Literature

[Inheritance and Prototype chain Prototype inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
