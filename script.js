const infoDay = document.querySelector('.info__day');
const infoTime = document.querySelector('.info__utcTime');

const date = new Date();
const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

infoDay.innerHTML = `<span>Day: </span> ${daysOfWeek[date.getDay()]},`;

infoTime.innerHTML = `<span>UTC Time: </span> ${date.getUTCMilliseconds()}`;
