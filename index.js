var xhr = require('xhr')
var example = require('./views/example.hbs')

document.getElementById("butt").addEventListener("click", function () {
  console.log('it worked')
})


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
