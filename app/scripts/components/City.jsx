import React from 'react';
import {Link} from 'react-router';
const City = (props) => {
    let text = 'Город не указан' 
    if (props.name) {
      text = `${props.name}(${props.country})`
    }
    return (
      <div>
        <span className="city c_gray">
        	{text}	
        </span> 
        <Link to="/city" className="link">изменить</Link>
      </div>
    );                               
};

City.propTypes = {
  name : React.PropTypes.string,
  country: React.PropTypes.string
}

export default City;