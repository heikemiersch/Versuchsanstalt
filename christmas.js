let today = new Date(); // gets new date (today)
let year = today.getFullYear(); //gets the year of the specified date according to local time
let month = today.getMonth(); //gets the month in the specified date according to local time
let christmas = new Date(year, 11, 25); // gets date, month on index 11 and number of day
let day = today.getDate(); // gets the day of the month for the specified date according to local time
let time = today.getTime(); // gets the numeric value corresponding to the time for the specified date according to universal time

if (month == 11 && day() > 25) {
    christmas.setFullYear(christmas.year + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((christmas.getTime() - time) / (one_day)) +
    " days left until Christmas!");