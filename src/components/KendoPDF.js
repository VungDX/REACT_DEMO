/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

import "../styles/DemoPdf.css";

class KendoPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
    };
  }

  ExportPdf = () => {
    console.log("clicked here");
    KendoPDF.drawing
      .drawDOM("#myCanvas", {
        forcePageBreak: ".page-break",
        paperSize: "A4",
        margin: { top: "1cm", bottom: "1cm" },
        scale: 0.8,
        height: 500,
        template: document.getElementById("#page-template").html(),
        keepTogether: ".prevent-split",
      })
      .then(function (group) {
        KendoPDF.drawing.pdf.saveAs(group, "Exported_Itinerary.pdf");
      });
  };

  render() {
    return (
      <>
        <button onClick={() => this.ExportPdf()}>download</button>

        <div class="wrapper" id="myCanvas">
          <div class="wx-holder">
            <div class="first-block wx-clearafter">
              <div class="wx-right">
                <div class="text-left bluecolor-text">
                  <p class="bold-text my-semibold">Lorem Ipsum</p>
                </div>
              </div>
            </div>

            <div>
              <div class="">
                <h2 class="my-medium">What is Lorem Ipsum?</h2>
              </div>

              <div class="wx-holder">
                <p class="p-class">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div class="">
                <h2 class="my-medium">Why do we use it?</h2>
              </div>

              <div class="wx-holder">
                <p class="p-class">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </div>
            <div>
              <div class="page-break">
                <h2 class="my-medium">Why do we use it?</h2>
              </div>
              <div class="wx-holder">
                <p class="p-class">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
              </div>

              <span class="prevent-split">
                <div class="prevent-split">
                  <h2 class="my-medium"> Where does it come from?</h2>
                </div>
                <div class="wx-holder">
                  <p class="p-class">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                    Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </p>
                </div>
              </span>
            </div>
            <div class="wx-clearafter"></div>
          </div>
        </div>
      </>
    );
  }
}

export default KendoPDF;
