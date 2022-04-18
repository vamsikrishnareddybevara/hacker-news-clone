import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { navOptions } from "./data/navOptions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stories from "./containers/stories/Stories";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar navOptions={navOptions} />

        <Routes>
          <Route exact path="/" element={<Stories category="topstories" />} />
          <Route path="/newest" element={<Stories category="newstories" />} />
          <Route path="/show" element={<Stories category="showstories" />} />
          <Route path="/jobs" element={<Stories category="jobstories" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
