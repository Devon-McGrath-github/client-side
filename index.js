var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function (err, data) {
  if (err) {
    console.log(err)
  }

  console.log(data) // in case you're curious

  document.body.innerHTML = example({
    name: data.name,
    latitude: data.latitude
  })
})
