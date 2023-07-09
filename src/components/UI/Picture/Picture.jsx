import React from 'react';

function Picture({ apiData, weather}) {
  return (
    <div>
      <p className="text-xl font-semibold">
        {apiData?.name + ", " + apiData?.sys?.country }
      </p>
      <img src={weather[0]?.img} alt="..." className="w-52 mx-auto no-drag"/>
      <h3 className="text-2xl font-bold text-zinc-800">
        {weather[0]?.type}
      </h3>
    </div>
  );
}

export default Picture;