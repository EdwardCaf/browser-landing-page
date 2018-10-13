let clock = document.getElementById('clock');
let date = document.getElementById('day');

// Updates Clock
function hexClock() {
  let time = new Date();
  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let month = time.getMonth();
  let date = time.getDate().toString();
  let year = time.getFullYear().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  let dateStr = month + ", " + date + "   " + year;
  let clockStr = hours + " : " + minutes + " : " + seconds;

  day.textContent = dateStr;
  clock.textContent = clockStr;

}
hexClock();
// Run app
setInterval(hexClock, 1000);