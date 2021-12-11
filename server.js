const express = require("express")
const app = express()
const bodyP = require("body-parser")
app.use(bodyP.urlencoded({
  extended: true
}))


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/register.html")
})

app.post("/", function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Confirm</h1>')
  res.write('<p>Name: ' + req.body.Name + '<p>')
  res.write('<p>Surname: ' + req.body.Surname + '</p>')
  res.write('<p> Mail: ' + req.body.Email + '</p>')
  res.write('<hr>')
  res.write('<p> Gender: ' + req.body.gender + '</p>')
  res.write('<p> Countries: </p>' + req.body.countries)
  res.write('<hr>')
  res.write('<p> Birth Date: ' + req.body.Birth + '</p>')
  res.write('<hr>')
  res.write('<p> Car: ' + req.body.Car + '</p>')
  res.write('<hr>')
  var bmi = Number(req.body.weight / (req.body.height * req.body.height))
  res.write('<p> BMI: ' + String(bmi) + '</p>')
  res.send()
  console.log(req.body);
})


app.listen(5000, function() {
  console.log("It is 5000 port")
})
