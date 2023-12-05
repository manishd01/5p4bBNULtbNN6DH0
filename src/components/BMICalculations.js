import { useState } from "react";

function BMICalculations() {
  let [weightval, setweightval] = useState(0);
  const [heightval, setheightval] = useState(0);
  const [result_values, setresult_values] = useState("");

  const handleChangeWeight = (e) => {
    const newValue = Math.min(300.0, Math.max(1.0, parseFloat(e.target.value)));
    setweightval(newValue);
  };
  const handleChangeheight = (e) => {
    const newValue = Math.min(3.0, Math.max(0.1, parseFloat(e.target.value)));
    setheightval(newValue);
  };
  const calculateResult = () => {
    const res = weightval / heightval;
    setresult_values(res.toFixed(1));
  };
  const clearBtn = () => {
    setheightval(0);
    setweightval(0);
    setresult_values("");
  };
  return (
    <>
      <div className="BMI_cal_container">
        <label>Enter Weight: ( valid value from 1.0-300.0 ) in KGs </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weightval}
          onChange={handleChangeWeight}
          min={1.0}
          max={300.0}
          step={0.2}
        />
        <br />
        <label> Enter Height: ( valid value from 0.1-3.0 ) in Mtrs. </label>
        <input
          type="number"
          id="height"
          name="height"
          value={heightval}
          onChange={handleChangeheight}
          min={1.0}
          max={300.0}
          step={0.1}
        />
        <br />
        <button onClick={calculateResult}> Calculate BMI</button>
        <button onClick={clearBtn}> Clear</button>
        <div>
          <label>Results:</label>
          {result_values}
        </div>
      </div>
    </>
  );
}

export default BMICalculations;
