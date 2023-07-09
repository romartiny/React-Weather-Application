import React from 'react';

function Input(props) {
  return (
    <input
      type="text"
      ref={props.inputRef}
      placeholder="Enter Your Location"
      className="text-xl border-b p-1 border-gray-200 font-semibold uppercase flex-1" />
  );
}

export default Input;