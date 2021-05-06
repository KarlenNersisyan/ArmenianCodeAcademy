const toDoIso = (str) => {
  let element = Array.from(new Set(str)).join("");
  return element === str ? true : false;
};

console.log(toDoIso("abc"));
