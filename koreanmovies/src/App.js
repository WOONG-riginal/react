import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import Tv from "./routes/Tv";
import Celebrity from "./routes/Celebrity";
import NotFound from "./routes/NotFound";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
