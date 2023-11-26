import "./App.css";
import LandingPage from "./components/LandingPage";
import BMICalculations from "./components/BMICalculations";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1> WEBAPP REACT</h1>
      <Router>
        {/* <Link to="/BMI_Cal">BMI</Link> */}
        <Link to="/">Resume Maker</Link>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/BMI_Cal" component={BMICalculations} />
        </Routes>
      </Router>
      <div className="BMICalculations">
        <a href="/BMI_Cal"> Click Here to See BMI Calculations </a>
      </div>
      {/* <LandingPage></LandingPage> */}
    </>
  );
}

export default App;
