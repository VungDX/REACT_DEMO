import React from "react";

const ControlPanel = (props) => {
  return (
    <div className="control-panel d-flex align-items-baseline justify-content-between">
      <a className="btn btn-primary" href="/assets/docs/file-sample.pdf" download={true} title="download">
        Download All
      </a>
    </div>
  );
};

export default ControlPanel;
