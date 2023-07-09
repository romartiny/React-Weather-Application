import React from 'react';

function Info({ apiData, img }) {
  return (
    <div className="flex justify-center pb-3">
      <img
        src={ img }
        alt="..."
        className="h-9 mt-1 pr-3 no-drag"
      />
      <h2 className="text-4xl font-extrabold">
        {apiData}
      </h2>
    </div>
  );
}

export default Info;