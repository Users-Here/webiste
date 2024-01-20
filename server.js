const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5555;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML form page
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;
  // Process the form data as needed
  console.log(formData);
  // Send a response back to the client
  res.send                    ('Thank you for you Purchase');


});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
