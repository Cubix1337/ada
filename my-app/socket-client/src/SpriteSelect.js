import React, { Component } from "react";

class SpriteSelctor extends Component {
    constructor(props) {
        super(props);        
        this.setSprite = this.setSprite.bind(this); 
        this.state = {sprite:'poring'}       
    }
    

    setSprite = event => {
        this.setState({sprite:event.target.value})
        this.props.socket.emit('set sprite',event.target.value)  
    }

    send = () => {    
        this.props.socket.emit('set sprite',this.state.sprite)    
    }

    render() {                
        return (
            <div>
                <select onChange={this.setSprite}>
                    <option value="poring">Poring</option>
                    <option value="drops">Drops</option>                    
                    <option value="fillir">Fillir</option>
                </select>                
                <button onClick={this.send}>Push to set sprite
                </button>
            </div>
        )
    }
}

export default SpriteSelctor