// MarkdownEditor.js
import React, { useState } from 'react';

const MarkdownEditor = ({ updatePreview }) => {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMarkdown(value);
    updatePreview(value); // Call the updatePreview function passed as prop
  };

  return (
    // <div>
    //      <h4>Markdown</h4>
    //   <textarea
    //     value={markdown}
    //     onChange={handleInputChange}
    //     placeholder="Enter Markdown here..."
    //     rows={10}
    //     cols={50}
    //   />
    // </div>
   
      <div className="editor">
        <textarea
          className="editor-textarea"
          value={markdown}
          onChange={handleInputChange}
          placeholder="Start typing Markdown here..."
        />
      </div>
      
    
  );
};

export default MarkdownEditor;
