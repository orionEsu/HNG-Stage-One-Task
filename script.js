const infoDay = document.querySelector('.info__day');
const infoTime = document.querySelector('.info__utcTime');

const date = new Date();
infoTime.textContent = date.getTime();
const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

infoDay.textContent = daysOfWeek[date.getDay()];

setInterval(function () {
	const date = new Date().getTime();
	infoTime.textContent = date;
}, 1000);
