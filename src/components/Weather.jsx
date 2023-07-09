import {useRef, useState} from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import Loading from "./UI/Loading/Loading";
import Picture from "./UI/Picture/Picture";
import Temperature from "./Temperature";
import NotFound from "./UI/NotFound/NotFound";

function Weather() {
  const [apiData, setApiData] = useState(null);
  const [showWeather, setShowWeather] = useState(null)
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const weatherTypes = [
    {
      type: "Clear",
      img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
      type: "Rain",
      img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
      type: "Snow",
      img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
      type: "Clouds",
      img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
      type: "Haze",
      img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
      type: "Smoke",
      img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
      type: "Mist",
      img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },
  ];

  const fetchWeather = async () => {
    if (inputRef.current.value) {
      console.log(process.env.REACT_APP_WEATHER_API_KEY);
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=c1e41c918ca414acf2a3eb4d6851c6c0`;
      setLoading(true);
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          setApiData(null);
          setShowWeather(
            weatherTypes.filter((weather) => weather.type === data.weather[0].main)
          )
          console.log(data)
          setApiData(data);
        })
        .catch((err) => {
          setShowWeather([{
            type: "Not Found",
            img: "https://cdn-icons-png.flaticon.com/512/4275/4275497.png"
          }])
        })
      setLoading(false);
    } else {
      setShowWeather(null);
    }
  }

  return (
    <div className="bg-gray-800 h-screen grid place-items-center no-select">
      <div className="bg-white w-96 p-4 rounded-md">
        <div className="flex intems-center justify-between">
          <Input inputRef={inputRef} />
          <Button fetch={fetchWeather}/>
        </div>
        <div className={`duration-300 delay-75 h-0 overflow-hidden ${showWeather ? (showWeather[0].type === "Not Found" ? "h-[20rem]" : "h-[42rem]") : "h-0"}`}>
          { loading ? (
            <Loading />
          ) : (
            showWeather && <div>
              <div className="text-center flex flex-col gap-6 mt-10">
                { apiData &&
                  <>
                    <Picture apiData={apiData} weather={showWeather} />
                  </>
                }
                { !apiData &&
                  <NotFound errorType={showWeather}/>
                }
                { apiData && (
                  <>
                    <Temperature apiData={apiData} weather={showWeather} />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weather;