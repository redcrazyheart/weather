import React from 'react';

const Block = (props) => {
    return (
      <div className="block">
        {props.children}
      </div>
    );                               
};

Block.propTypes = {
  children : React.PropTypes.node,
}

export default Block;