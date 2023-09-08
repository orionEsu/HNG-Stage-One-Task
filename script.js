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

setInterval(function () {
	const date = new Date().getTime();
	infoTime.textContent = date;
}, 1000);

infoDay.textContent = daysOfWeek[date.getDay()];
