import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="bg-fx-pdf">
      <section id="pdf-section" className="d-flex flex-column align-items-center w-100">
        <Document file="/assets/docs/file-sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
        <ControlPanel scale={scale} setScale={setScale} numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} file="/assets/docs/file-sample.pdf" />
      </section>
    </div>
  );
};

export default PDFReader;
