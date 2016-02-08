import React from 'react';
import WeatherIcon from './WeatherIcon.jsx';

const dayWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const WeatherListItem = (props) => {
	let {item, active, handler} = props;
	let numDay = new Date(item.dt*1000).getDay();
    return (
      	<div className={`h_inline h_text_align weather_list_item ${active}`} onClick={handler}>
	      <div className="c_gray h_text_allign">{ dayWeek[numDay] }</div>
	      
	        <div className="h_desktop m_display">
	          <WeatherIcon weather={item.weather} small/>
	        </div>
	      <div className="weather_list_item_temp">
	        <span className="h_inline">{ Math.round(item.temp.day)}&deg;</span>&nbsp;&nbsp;
	        <span className="c_gray h_inline">{ Math.round(item.temp.night)}&deg;</span>
	      </div>
	    </div>
    );                               
};

WeatherListItem.propTypes = {
  item: React.PropTypes.object,
  active: React.PropTypes.string,
  handler: React.PropTypes.func
}
export default WeatherListItem;