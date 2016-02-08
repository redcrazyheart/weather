import React from 'react';

const Month = [
	"Января",
	"Февраля",
	"Марта",
	"Мая",
	"Июня",
	"Июля",
	"Августа",
	"Сентября",
	"Октября",
	"Ноября",
	"Декабря"
];

const DateFormatter = (props) => {
	let date = new Date(props.dt * 1000);
	let dateNow = new Date();
	let text = '';
	if (
		date.getDate() == dateNow.getDate() &&
		date.getMonth() == dateNow.getMonth()
	) {
		text = 'Сегодня';
	} else if (
		date.getMonth() == dateNow.getMonth() &&
		date.getDate() == dateNow.getDate() + 1
	) {
		text = 'Завтра';
	} else {
		text = date.getDate() + ' '  + Month[date.getMonth()]
	}
    return (
      <span className="c_gray">{text}</span>
    );                               
};

DateFormatter.propTypes = {
  dt : React.PropTypes.number
}

export default DateFormatter;