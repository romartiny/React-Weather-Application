import React from 'react';
import Info from "./UI/Info/Info";

function Temperature({ apiData }) {
  const convertToTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString("en-US");
  }

  return (
    <div>
      <Info apiData={apiData?.main.temp + ' °C'} img={'https://cdn-icons-png.flaticon.com/512/7794/7794499.png'} />
      <Info apiData={apiData?.wind.speed + ' m/s'} img={'https://cdn-icons-png.flaticon.com/512/2011/2011448.png'} />
      <Info apiData={apiData?.main.humidity + ' %'} img={'https://cdn-icons-png.flaticon.com/512/727/727790.png'} />
      <Info apiData={apiData?.visibility + ' m'} img={'https://cdn-icons-png.flaticon.com/512/565/565654.png'} />
      <Info apiData={convertToTime(apiData?.sys.sunrise)} img={'https://cdn-icons-png.flaticon.com/512/3920/3920639.png'}/>
      <Info apiData={convertToTime(apiData?.sys.sunset)} img={'https://cdn-icons-png.flaticon.com/512/3920/3920728.png'}/>
    </div>
  );
}

export default Temperature;