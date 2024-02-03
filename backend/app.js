// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const {marked} = require('marked');
const cors = require('cors');

const app = express();
const port = 8080;
app.use(cors())
app.use(bodyParser.json());

app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  console.log("check",markdown)
  try {
    const html = marked(markdown);
    res.json({ html });
  } catch (error) {
    console.error('Error during Markdown to HTML conversion:', error);
    res.status(500).json({ error: 'Error converting Markdown to HTML' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
