import React from 'react';

function Transformer(props) {
  
  return (
    <img
      className = 'transformer'
      src={props.transformer.url}
      alt={props.transformer.name}
      onClick={props.handleClick}
    />
  );
}

export default Transformer;
