import React, { Component } from "react";
// import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
  }

  handleMouseOver(event){
    // console.log(event)
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
    })
  }
   

  render() {
    return (
      <div onMouseMove = {this.handleMouseOver}>
        <P5Wrapper sketch={sketch} >
        </P5Wrapper>
        <p>X: {this.state.mouseX}</p>
        <p>Y: {this.state.mouseY}</p>
      </div>
    ); 
  }
}

const circles = [];

const sketch = (p)=>{
  console.log(p)
  p.setup = function () {
    p.createCanvas(800, 400, p.WEBGL);
    console.log(Circle(p.width,p.height))
    // p.noLoop()

    for (let i = 0; i < 100; i++) {
      var x = Math.random() * p.width 
      var y =  Math.random() * p.height
      var veloX = (Math.random() - 0.5) * 15
      var veloY = (Math.random() - 0.5) * 15
      var radius = 50
      var r = Math.random() * 255
      var g = Math.random() * 255
      var b =Math.random() * 255
      circles.push(new Circle(x,y,veloX,veloY,radius,r,g,b))
    }
   
    console.log(circles)
  };

  p.draw = function () {
    p.background(100);
    p.stroke(255);
    p.fill(0,255,255)
    p.push();
    p.ellipse((p.winMouseX), (p.winMouseY), 50, 50);

    circles.forEach(item => {
      p.push();
      p.stroke(item.r,item.g,item.b);
      p.fill(item.r,item.g,item.b);
      p.ellipse(item.x,item.y,item.radius,item.radius);
        if(item.x + item.radius > p.width
          || item.x - item.radius <0){
            item.veloX = -item.veloX
          }
  
          if(item.y + item.radius > p.height
            || item.y - item.radius < 0){
              item.veloY = -item.veloY
            }
  
            item.x+=item.veloX;
            item.y+=item.veloY;
      }
    )
  }
}

const Circle = (x,y,veloX, veloY,radius,r,g,b)=>{
  return{
    x : x,
    y : y,
    veloX : veloX,
    veloY : veloY,
    radius : radius,
    r : r,
    g: g,
    b: b,
  }}
  

export default Canvas;
