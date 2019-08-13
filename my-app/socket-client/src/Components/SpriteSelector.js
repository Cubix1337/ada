import React, { Component } from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
margin: 0 auto;
width: 50%;
justify-content: center;
`

const SpriteContainer = styled.div`
border:1px solid black;
padding: 20px;
margin:10px;
width: 150px;
height:150px;
display:grid;
`

const ImgContainer = styled.div`
`
const PlayerName = styled.p`
`

class SpriteSelctor extends Component {
    imgGen = (path) => {
        return `http://localhost:4001/images/sprites/${path}.gif`
    }

    render() {
        const players = this.props.players
        return (
            <Wrapper>
                {players.map((item, i) => {
                    return (
                        <SpriteContainer key={i}>
                            <PlayerName>{item.name}</PlayerName>                            
                            <ImgContainer>
                                <img src={this.imgGen(item.sprite)} alt={item.sprite} />
                            </ImgContainer>
                        </SpriteContainer>
                    )
                }
                )}
            </Wrapper>
        )
    }
}

export default SpriteSelctor