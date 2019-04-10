var motivations = require('motivations')
var shout =  require('./shout.js')

// console.log(motivations)
shout(motivations[Math.floor(Math.random() * motivations.length)])
