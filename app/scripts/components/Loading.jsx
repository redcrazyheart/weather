import React from 'react';

const Loading = (props) => {
	if(props.loading) {
		return (
      <div className="Loading loader"></div>
    );
	}

    return (
      <div>
      	{props.children}
      </div>
    );                               
};

Loading.propTypes = {
  loading: React.PropTypes.bool,
  children: React.PropTypes.node,
}
export default Loading;