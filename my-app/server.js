const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const path = require('path')
const players = []

// our localhost port
const port = 4001

const app = express()
app.use('/images', express.static('images'))
// app.use('/images', express.static(path.join(__dirname, '')))

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {     
        players.push({      
        playerID: socket.id,
        name: 'undefined'    
      })    
  io.sockets.emit('setID', socket.id) 
  io.sockets.emit('getPlayers',players)

  console.log('New client connected',socket.id)
 

  // just like on the client side, we have a socket.on method that takes a callback function

  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    for (let index = 0; index < players.length; index++) {
      players[index].playerID === socket.id?players.splice(index,1):null      
    }
    io.sockets.emit('getPlayers',players)     
    console.log('user disconnected',players)
  })


  socket.on('set name', (name) => {
    for (let index = 0; index < players.length; index++) {
      if(players[index].playerID === socket.id){
        players[index].name=name;        
        io.sockets.emit('getPlayers',players) 
      }   
    }
    console.log(players)       
  })

  socket.on('set sprite', (sprite) => {
    for (let index = 0; index < players.length; index++) {
      if(players[index].playerID === socket.id){
        players[index].sprite=sprite;        
        io.sockets.emit('get sprites',players) 
      }     
    }
    console.log(players)
  })         
})


server.listen(port, () => console.log(`Listening on port ${port}`))