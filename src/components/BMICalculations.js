function BMICalculations() {
  return (
    <>
      <div className="BMI_cal_container">
        <label>Enter Weight:</label>
        <input type="number" />
        <label> Enter Height:</label>
        <input type="number" />
        <br />
        <button> Calculate BMI</button>
        <div>
          <label>Results:</label>
        </div>
      </div>
    </>
  );
}

export default BMICalculations;
