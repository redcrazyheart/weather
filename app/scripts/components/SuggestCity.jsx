import React from 'react';
import {Link} from 'react-router';

const SuggestCity = (props) => {
	let item = props.list.map((item) =>
		<li className="suggest c_gray" key={item.geonameId}>
			<Link className="suggest_item" to={`/?city=${item.name}`}>{item.name}({item.countryName})</Link>
		</li>
	);
    return (
      <ul>
        {item}
      </ul>
    );                               
};

SuggestCity.propTypes = {
  list : React.PropTypes.array,
}

export default SuggestCity;