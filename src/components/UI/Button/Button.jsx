import React from 'react';

function Button(props) {
  return (
    <button onClick={props.fetch}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/758/758651.png"
        alt="search"
        className="w-8 "
      />
    </button>
  );
}

export default Button;