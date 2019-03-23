const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('./public/index.html');
})
app.listen(port, () => {
  console.log("Server is up!")
})