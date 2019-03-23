const express = require('express')

const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send("HIIII!")
})
app.listen(3000, () => {
  console.log("Server is up!")
})