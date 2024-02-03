// LivePreview.js
import React from 'react';

const LivePreview = ({ html }) => {
  return (
    // <div >
    //   <h4>Live Preview</h4>
    //   <div  dangerouslySetInnerHTML={{ __html: html }} />
    // </div>
    <div className="preview">
        <h2 className="preview-header">Live Preview</h2>
        <div
          className="preview-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
  );
};

export default LivePreview;
