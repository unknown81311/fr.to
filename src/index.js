const express = require('express');
const path = require('path');

const app = express();

// Serve files in static
app.use(express.static(path.join(__dirname, "..","static")));
app.get('/api/ip',(req,res)=>{
  res.send(req.headers['x-forwarded-for'] +"|"+ req.connection.remoteAddress);
})
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(80, () => {
  console.log('server started');
});
