import React, { Component } from "react";
import styled from 'styled-components'

const gridDimensions = [10, 10]

const templateCalc = (dimension) => {
    let string = ''
    for (let index = 0; index < dimension; index++) {
        string += `${100 / dimension}% `
    }
    return string
}

let poring = `http://localhost:4001/images/sprites/poring.gif`

const GridWrapper = styled.div`
border:1px solid black;
display:grid;
grid-template-columns: ${templateCalc(gridDimensions[0])};
grid-template-rows: ${templateCalc(gridDimensions[1])};
width:50%;
height:800px;
margin: 0 auto;
`
const GridCell = styled.div`
border: 1px solid green;
`
const gridCells = [];


for (let index = 0; index < (gridDimensions[0] * gridDimensions[1]); index++) {
    gridCells.push(
        {
            gridReference: [index, 0],
            contains: null
        }
    )
}


class Grid extends Component {
    constructor(props) {
        super(props);
        this.cellMove = this.cellMove.bind(this); 
    }
    
    cellMove=(e)=>{

    }

    render() {
        gridCells[0].contains = poring
        console.log(gridCells)
        return (
            <GridWrapper>
                {gridCells.map((item, i) => {
                    return (
                        <GridCell key={i} onClick={this.cellMove}>                       
                            {item.contains !== null ?
                            (<img src={item.contains} alt='null'/>)
                        :(null)}
                        </GridCell>
                    )
                }
                )}
            </GridWrapper>
        )
    }
}

export default Grid