import React, { Component } from "react";


class NewPlayerRegistrationButton extends Component {    
    constructor(props) {
        super(props);
        this.state = {name: ''}
        this.setName = this.setName.bind(this);                
   console.log(this.props.socket)
    }
         
    setName = event => {                
        this.setState({ name: event.target.value });           
    }    

    send = (event) => {
        this.setName(event)
        this.props.socket.emit('set name', this.state.name)
    }
                
    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.setName}></input>
                <button onClick={this.send}>Push to send Name                    
                </button>            
                </div>            
        )
    }
}


export default NewPlayerRegistrationButton
