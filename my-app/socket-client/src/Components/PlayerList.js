import React, { Component } from "react";

class PlayerList extends Component {
    render() {
        console.log(this.props.players)
        return (
            <ul>               
                {this.props.players.map((item, i) => {
                    return <li key={i}>{item.name}</li>
                }
                )}
            </ul>
        )
    }
}

export default PlayerList