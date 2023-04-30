const express = require('express');

const app = express();

// Serve files in static
app.use(express.static(__dirname + "/../static"));

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(80, () => {
  console.log('server started');
});
