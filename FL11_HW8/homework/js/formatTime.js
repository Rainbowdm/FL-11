let days,
    hour,
    minute;

function formatTime(minutes) {
    days = Math.floor(minutes / 1440); // 60 * 24
    hour = Math.floor((minutes - (days * 1440)) / 60);
    minute = Math.floor(minutes % 60);
    return days + ' day(s) ' + hour + ' hour(s) ' + minute + ' minute(s).'
}

function formatterTime(minutes) {
    hour = Math.floor(minutes / 60);
    days = Math.floor(hour / 24);
    hour = hour - (days * 24);
    minute = Math.floor(minutes % 60);
    return days + ' day(s) ' + hour + ' hour(s) ' + minute + ' minute(s).'
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));

console.log(formatterTime(120));
console.log(formatterTime(59));
console.log(formatterTime(3601));