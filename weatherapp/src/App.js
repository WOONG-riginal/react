import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import Forecast from "./routes/Forecast"
import SearchArea from "./routes/SearchArea"

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<WeatherMap />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/searchArea" element={<SearchArea />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;