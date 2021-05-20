const Pagination = {
  pages: [],
  currentPage: 0,
  init: (array, pageSize) => {
    let fakePages = [];
    let inp = [];
    for (let i = 0; i < array.length; i++) {
      if (inp.length === pageSize) {
        fakePages.push(inp);
        inp = [];
      }
      inp.push(array[i]);
    }
    if (inp.length != 0) {
      fakePages.push(inp);
    }
    Pagination.array = [...fakePages];
  },
  nextPage: () => {
    if (Pagination.currentPage + 1 < Pagination.array.length) {
      Pagination.currentPage += 1;
    } else {
    }
    return Pagination;
  },
  prevPage: () => {
    if (Pagination.currentPage > 0) {
      Pagination.currentPage -= 1;
    }
    return Pagination;
  },
  firstPage: () => {
    Pagination.currentPage = 0;
  },
  lastPage: () => {
    Pagination.currentPage = Pagination.array.length - 1;
  },
  goToPage: (number) => {
    if (number >= 0 && number < Pagination.array.length) {
      Pagination.currentPage = number;
    }
  },
  getPageItems: () => {
    console.log(Pagination.array[Pagination.currentPage]);
  },
};
const wordsNumbers = "a1b2c3d4e5f6g7".split("");
Pagination.init(wordsNumbers, 4);
// Pagination.nextPage().nextPage().prevPage();
// Pagination.firstPage();
// Pagination.lastPage();
// Pagination.goToPage(3);
Pagination.getPageItems();
