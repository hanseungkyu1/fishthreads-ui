import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={DashBoard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
