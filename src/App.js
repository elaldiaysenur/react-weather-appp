import './App.css';
import Form from './component/Form';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <div className="App">
     <WeatherProvider>
     <div className="wrapper">
        <div className="container">
         <Form/>
        </div>
      </div>
     </WeatherProvider>
    </div>
  );
}

export default App;
