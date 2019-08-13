// Updated. Thanks to: Paul Luna
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import NewPlayerRegistrationButton from './NewPlayer'
import SpriteSelect from './SpriteSelect'

// import Canvas from "./Components/Canvas";
import Canvas from "./Components/Canvas";
import SpriteSelector from "./Components/SpriteSelector"

const socket = socketIOClient('localhost:4001')

class App extends Component {  
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:4001",
      players:[],
      activePlayer:'',
      ///
      color: 'white'
      ///
    };    
  }
   

  componentDidMount = () => {           
      socket.on('getPlayers', (players) => {
        this.setState({players:players})
          console.log('players set')
      })
      
      socket.on('get sprites', (players) => {
        this.setState({players:players})
          console.log('sprite event set')
      })
      
  } 

  render() {
    // const socket = socketIOClient(this.state.endpoint);

    return (
      <div style={{ textAlign: "center" }}>        
        <NewPlayerRegistrationButton socket={socket}/>
        <SpriteSelect socket={socket} />        
        <SpriteSelector players = {this.state.players} />  
        {/* <Grid /> */}
        <Canvas />      
      </div>
      
    )
  }
}
export default App;
