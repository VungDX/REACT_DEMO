/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Document, Page } from "react-pdf";

class DemoReactpdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }

  componentDidMount() {}

  onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  render() {
    return (
      <div>
        <Document file="somefile.pdf" onLoadSuccess={() => this.onDocumentLoadSuccess()}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default DemoReactpdf;
