// App.js
import React, { useState } from 'react';
import MarkdownEditor from './Container/MarkdownEditor';
import LivePreview from './Container/LivePreview';
import axios from 'axios';

const App = () => {
  const [previewHtml, setPreviewHtml] = useState('');

  const updatePreview = (markdown) => {
    // Call the backend API to convert markdown to HTML
    axios.post('http://localhost:8080/convert',{  markdown }, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
    
      .then(({data}) => {
        console.log(data,"check")
        setPreviewHtml(data.html);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="editor-container">
      <MarkdownEditor updatePreview={updatePreview} />
      <LivePreview html={previewHtml} />
    </div>
  );
};

export default App;
