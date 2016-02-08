import React from 'react';
import WeatherIcon from './WeatherIcon.jsx';
import DateFormatter from './DateFormatter.jsx'

const Weather = (props) => {
	if(props.temp === undefined) {
		return <div/>;
	}
    return (
      <div>
      	<DateFormatter dt={props.dt}/>
	      <div className="weather h_flex_block">
	         <div className="weather_header">
	          <WeatherIcon weather={props.weather} inline/>
	          <div className="weather_header_temp">{ Math.round(props.temp.day)}&deg;</div>
	        </div>
	        <div className="weather_details">
	          <div className="">Температура ночью: { Math.round(props.temp.night)}&deg;</div>
	          <div className="">Давление: { props.pressure}</div>
	          <div className="">Влажность: { props.humidity}&#37;</div>
	        </div>
	      </div>
      </div>
    );                               
};

Weather.propTypes = {
  dt: React.PropTypes.number,
  temp : React.PropTypes.object,
  pressure: React.PropTypes.number,
  weather: React.PropTypes.array,
  humidity: React.PropTypes.number
}
export default Weather;