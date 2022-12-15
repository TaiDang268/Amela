// Bai1
const getCurrentDate = (str: string): string => {
  const today =
    new Date().getDate() +
    str +
    (new Date().getMonth() + 1) +
    str +
    new Date().getFullYear();
  return today;
};
console.log(getCurrentDate("/"));

// Bai2
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(8, 2020));

// Bai3
const checkEndWeek = (day: number, month: number, year: number): boolean => {
  const check = new Date(year, month - 1, day).getDay();
  const isEndWeek = check === 0 ? true : false;
  return isEndWeek;
};
console.log(checkEndWeek(15, 12, 2022));

// Bai4
const totalMinute = (hour: number, minute: number): number => {
  return hour * 60 + minute;
};
console.log(totalMinute(1, 20));

// Bai5
const getDayFromBeginYear = (): number => {
  const today = new Date().getTime();
  const currentYear = new Date().getFullYear();
  const beginYear = new Date(currentYear, 1, 1).getTime();
  const numbersOfDay = Math.floor((today - beginYear) / (1000 * 60 * 60 * 24));
  return numbersOfDay;
};
console.log(getDayFromBeginYear());

// Bai6
const calculate_age = (date: Date): number => {
  const currentYear = new Date().getFullYear();
  const yearOfBirth = date.getFullYear();
  return currentYear - yearOfBirth;
};
console.log(calculate_age(new Date(1982, 11, 4)));

// Bai7
const startOfWeek = (date: Date): string => {
  const convertDate = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getDate()
  );
  const checkNumber = convertDate.getDay();
  const startWeek = convertDate.getDate() - checkNumber + 1;
  return (
    startWeek +
    "-" +
    (convertDate.getMonth() + 1) +
    "-" +
    convertDate.getFullYear()
  );
};
console.log(startOfWeek(new Date(2022, 12, 29)));

// Bai8

const endOfMonth = (now: Date): string => {
  const date = new Date(now);
  const month = date.getMonth() + 1;
  console.log(month);
  const year = date.getFullYear();
  return (
    getDaysInMonth(month, year) +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear()
  );
};

let dt = new Date(2022, 9, 15);

console.log(endOfMonth(dt));


// Bai9
