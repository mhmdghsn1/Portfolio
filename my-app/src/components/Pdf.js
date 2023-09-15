import React from "react";

const PdfComponent = () => {
  const pdfUrl = "C:/Users/Admin/Desktop/PortfolioGhosn/my-app/src/pdfjs-dist/pdfjs.pdf";

  const downloadPdf = () => {
    window.location.href = pdfUrl;
  };

  return (
    <div className="pdf-div"> {/* استخدام الكلاس "pdf-div" */}
      <button className="pdf-button" onClick={downloadPdf}>Click Here</button>
      <p className="pdf-text">Download Mohamad Ghosn CVs as PDF </p>
    </div>
  );
};

export default PdfComponent;