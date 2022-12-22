const talkingCalendar = function(date) {
  
  const [year, month, day] = date.split("/");
  const formattedDay = day[0] === "0" ? day.slice(1) : day;
  const dateObject = new Date(year, month - 1, day);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = monthNames[dateObject.getMonth()];

  let daySuffix;

  if (formattedDay === "1" || formattedDay === "21" || formattedDay === "31") {
    daySuffix = "st";
  } else if (formattedDay === "2" || formattedDay === "22") {
    daySuffix = "nd";
  } else if (formattedDay === "3" || formattedDay === "23") {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  return `${monthName} ${formattedDay}${daySuffix}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));