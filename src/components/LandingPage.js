import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { saveAs } from "file-saver";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
function LandingPage() {
  let [Fname, setFname] = useState("");
  let [Date, setDate] = useState("");
  let [Skills, setSkills] = useState("");
  let handling_details = () => {
    const docDefinition = {
      content: [
        { text: "Resume", style: "header" },
        { text: `Name: ${Fname}`, style: "subheader" },
        { text: `Passout Date: ${Date}`, style: "subheader" },
        { text: `Skills: ${Skills}`, style: "subheader" },
      ],
      styles: {
        header: { fontSize: 18, bold: true, margin: [0, 0, 0, 50] },
        subheader: { fontSize: 14, bold: false, margin: [0, 10, 0, 5] },
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
      saveAs(blob, "SmallResume.pdf");
    });
  };

  return (
    <>
      <h2> Candidate Details </h2>
      <div className="outerbox">
        <div className="elementbox">
          <label>First name:</label>
          <input type="text" onChange={(e) => setFname(e.target.value)} />
          <br />
        </div>

        <div className="elementbox">
          <label>Highest Degree Passout year:</label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <br />
        </div>
        <div className="elementbox">
          <label> Technologies/Language known:</label>
          <input type="text" onChange={(e) => setSkills(e.target.value)} />
        </div>
      </div>
      <div className="downloadLink">
        <button onClick={handling_details}> Click Here to Download </button>
      </div>
      <div className="BMICalculations">
        <a href="#13"> Click Here to See BMI Calculations </a>
      </div>
    </>
  );
}

export default LandingPage;
