const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const fetch = require('node-fetch');
const URL = require('url');

const SerpApi = require('google-search-results-nodejs');
const Search = new SerpApi.GoogleSearch(process.env['secret_api_key']);

ret = a => a;

app.use(express.static(__dirname + "/static"));

app.get('/', async (req, res) => {
  let parsed = URL.parse(req.url, true);
  
  let search = parsed.query;
  res.render('home', { search:search.length?search:"" });
});

app.post('/', async (req, res) => {
  let parsed = URL.parse(req.url, true).query;
  let search = parsed.q;
  const params = {
    engine: "duckduckgo",
    q: search,
    kl: "us-en",
    start:0,
  };
  
  Search.json(params, (data)=>{
    res.render('searchResults', { data });
  });
});

app.listen(3000, () => {
  console.log('server started');
});
