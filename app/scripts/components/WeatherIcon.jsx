import React from 'react';
import classNames from 'classnames';

const WeatherIcon = (props) => {
	let item = props.weather && props.weather[0] || {};

	let classname = classNames({
		icon: true,
		small: props.small,
		h_inline: props.inline,
		sunny_icon: item.main == 'Clear',
		partly_cloudy_icon: item.main == 'Clouds',
		cloudy_icon: item.main == 'Clouds',
		snow_icon: item.main == 'Snow',
		rain_icon: item.main == 'Rain'
	})
    return (
      <i className={classname}></i>
    );                               
};

WeatherIcon.propTypes = {
  weather : React.PropTypes.array,
  small: React.PropTypes.bool,
  inline: React.PropTypes.bool
}

export default WeatherIcon;