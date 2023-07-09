import React from 'react';

function NotFound({ errorType }) {
  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4275/4275497.png"
        alt="..."
        className="w-52 mx-auto no-drag pb-7"
      />
      <h3 className="text-2xl font-bold text-zinc-800">
        {errorType[0]?.type}
      </h3>
    </div>
  );
}

export default NotFound;