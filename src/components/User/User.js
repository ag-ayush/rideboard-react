import React from 'react';

export default props => {
  if (!props.isVisible) {
    return null;
  }

  return (<div>
    <p>id_token: {props.id_token}</p>
    </div>);
};
