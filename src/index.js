const express = require('express');

const app = express();

// Serve files in static
app.use(express.static("../static"));

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
