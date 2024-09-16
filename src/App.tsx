import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
