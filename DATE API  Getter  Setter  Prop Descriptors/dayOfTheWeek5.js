/*
Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", or "Saturday".
To illustrate, the day of the week for "12/07/2016" is "Wednesday".
 */

const getDay = (date) => {
  let temp = date.split("/");
  let d = new Date(`${temp[2]}-${temp[0]}-${temp[1]}`);
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[d.getDay()];
};

console.log(getDay("12/07/2016"));
console.log(getDay("09/04/2016"));
console.log(getDay("12/08/2011"));
