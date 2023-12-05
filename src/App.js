import "./App.css";
import LandingPage from "./components/LandingPage";
import BMICalculations from "./components/BMICalculations";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadResume from "./components/UploadResume";
import MY_PUBLIC_URL from "./config";
function App() {
  return (
    <>
      <h1> WEBAPP REACT</h1>
      <Router basename={MY_PUBLIC_URL}>
        {/* <Link to="/BMI_Cal">BMI</Link> */}
        <Link to="/">Resume Maker</Link>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/BMI_Cal" element={<BMICalculations />} />
          <Route path="/upload_resume" element={<UploadResume />} />
        </Routes>
      </Router>
      <div className="BMICalculations">
        <a href="/BMI_Cal"> Click Here to See BMI Calculations </a>
      </div>
      <div className="UploadResume">
        <a href="/upload_resume"> Click here to Upload resume</a>
      </div>
      {/* <LandingPage></LandingPage> */}
    </>
  );
}

export default App;
