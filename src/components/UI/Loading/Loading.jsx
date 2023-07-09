import React from 'react';

function Loading() {
  return (
    <div className="grid place-items-center h-full">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png"
        alt="loading"
        className="w-14 mx-auto mb-2 animate-spin"
      />
    </div>
  );
}

export default Loading;