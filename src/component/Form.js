import React from "react";
import { useWeatherContext } from "../context/WeatherContext";


const Form = () => {
  const {setState, apiData, getState, setGetState } =
    useWeatherContext();
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div>
      <div className="App">
        <header className="d-flex justify-content-center align-items-center">
          <h2>React Weather App</h2>
        </header>
        <div className="container">
          <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
            <div class="col-auto">
              <label for="location-name" class="col-form-label">
                Enter Location :
              </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                onChange={inputHandler}
                value={getState}
              />
            </div>
            <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
            </button>
          </div>

          <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
            {apiData.main ? (
              <div class="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />

                <p className="h2">
                  {kelvinToFarenheit(apiData.main.temp)}&deg; C
                </p>

                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{apiData.name}</strong>
                </p>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <i class="fas fa-temperature-low "></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                      </strong>
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {" "}
                      <strong>{apiData.weather[0].main}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
        <footer className="footer">
          <code>
            Created by{" "}
            <a href="https://github.com/elaldiaysenur" target="none">
              Ayşe Nur Elaldı
            </a>{" "}
            using React
          </code>
        </footer>
      </div>
    </div>
  );
};

export default Form;
