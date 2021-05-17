/*
The function should produce the same output even if dateStart is greater than dateEnd

let january = new Date(2017, 0, 1); let march = new
Date(2017, 2, 1); monthsInterval(january, march)

['January', 'February', March']

let december = new Date(2017, 11, 1); let january =
new Date(2018, 0, 1); monthsInterval(december,
january)

['January', 'December']

let january2017 = new Date(2017, 0, 1); let january2018
= new Date(2018, 0, 1); monthsInterval(january2017,
january2018)

['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November',
'December']
 */

const monthsInt = (firstMonths, lastMonths) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let month of months) {
    let first = firstMonths.getMonth();
    let last = lastMonths.getMonth();
    let currentYear = lastMonths.getYear() - firstMonths.getYear();
    if (currentYear === 0) {
      return months.slice(first, last + 1);
    } else {
      let difMonths = currentYear * months.length + last - first;
      let newArr = [];
      for (let i = 0; i < difMonths; i++) {
        newArr.push(months[i % 12]);
      }
      return newArr;
    }
  }
};

let january2017 = new Date(2017, 0, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInt(january2017, january2018));
