import "./App.scss";
// import Headers from "./components/headers/Headers";
import Headers from "./components/nftDetails/headers/Headers";
import Home from "./components/home/Home";
import NtfHome from "./components/nftDetails/NtfHome";
import NftOverview from "./components/nftDetails/NftOverview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Headers />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ntf" element={<NtfHome />} />
          <Route path="/review" element={<NftOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
