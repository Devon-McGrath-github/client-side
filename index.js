var xhr = require('xhr')
var example = require('./views/example.hbs')

var p = document.createElement("button");
p.innerHTML = '<button id="button">WHERE IS I WHO IS I??</button>'




document.getElementById("button").addEventListener("click", function () {})


// function displayInfo() {

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function (err, data) {
    if (err) {
      console.log(err)
    }

    var objectData = JSON.parse(data.body)

    document.body.innerHTML = example({
      name: 'Bevon',
      latitude: objectData.latitude
    })
  })
  // }
