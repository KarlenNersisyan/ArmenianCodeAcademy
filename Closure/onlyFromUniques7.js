function checkUnique(arr) {
  let unique = new Set(arr);
  let check = true;
  if (unique.size === arr.length) {
    check = true;
  } else {
    check = false;
  }
  return check;
}
