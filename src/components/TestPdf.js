import React, { Component } from "react";

class TestBase64 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  generatePDF = () => {
    console.log("Click here");
    const element = document.getElementById("invoice");
    // html2pdf().from(element).save();
  };
  render() {
    return (
      <div className="container mt-5" id="invoice">
        <p>
          This worker has methods that can be chained sequentially, as each Promise resolves, and allows insertion of your own intermediate functions between steps. A prerequisite system allows you to skip over mandatory steps (like canvas creation)
          without any trouble:
        </p>
        <button className="btn btn-primary" onClick={() => this.generatePDF()}>
          Download Pdf
        </button>
      </div>
    );
  }
}

export default TestBase64;
