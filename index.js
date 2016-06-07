var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function (err, data) {
  if (err) {
    console.log(err)
  }

  console.log(data.latitude)
  console.log(JSON.parse(data.body))
    // in case you're curious

  document.body.innerHTML = example({
    name: 'Bevon',
    latitude: data
  })
})
