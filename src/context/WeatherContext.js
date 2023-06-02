import { useState, useEffect, createContext, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = (props) => {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Antalya");
  const [state, setState] = useState("Antalya");

  const apiKey = "a2a21bf531586f0453b1ac9babdc3b23";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiURL]);
  console.log(state);

  return (
    <WeatherContext.Provider
      value={{ state, setState, apiData, setApiData, getState, setGetState }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export const useWeatherContext = () => useContext(WeatherContext);
