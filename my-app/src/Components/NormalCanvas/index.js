import React, { Component } from "react";

class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
      ctx.font = "40px Courier"
      ctx.fillText(this.props.text, 210, 75)
    this.Circle(100,100,5,5,20,ctx)
  }
  Circle = (x, y, veloX, veloY, radius, ctx) =>{
    this.x = x;
    this.y = y;
    this.veloX = veloX;
    this.veloY = veloY;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colors[getRandomIntInclusive(0, colors.length)];
    this.ctx = ctx;
  
    this.draw = function () {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.strokeStyle = colors[getRandomIntInclusive(0, colors.length)];
      this.ctx.fillStyle = this.color;
      this.this.ctx.fill()
    }
    this.update = function () {
      if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
        this.veloX = -this.veloX;
      }
  
      if (this.y - this.radius > window.innerWidth || this.y - this.radius < 0) {
        this.veloY = -this.veloY;
      }
  
      this.x += this.veloX;
      this.y += this.veloY;
  
      //interactivity 
  
      if (mouse.x - this.x < 100 &&
        mouse.x - this.x > -100 &&
        mouse.y - this.y < 100 &&
        mouse.y - this.y > -100
      ) {
        if (this.radius < maxRadius) {
          this.radius += 1
          
        }
      }
      else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
  
      this.draw()
    }
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={window.innerWidth} height={window.innerHeight} />
      </div>
    )
  }
}
export default Canvas


var mouse = {
  x: undefined,
  y: undefined
}

var minRadius = 25
var maxRadius = minRadius * 2


// window.addEventListener('resize', function () {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
//   init()
// })

// window.addEventListener('mousemove', function (event) {
//   mouse.x = event.x
//   mouse.y = event.y
// })


const colors = [
  '#DB2B30',
  '#8F1D2C',
  '#5A142A',
  '#400D2A',
  '#140A25',
]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function distance(x1, x2, y1, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return (
      Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  )
}

// function Circle(x, y, veloX, veloY, radius) {
//   this.x = x;
//   this.y = y;
//   this.veloX = veloX;
//   this.veloY = veloY;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = colors[getRandomIntInclusive(0, colors.length)]

//   this.draw = function () {
//     ctx.beginPath()
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//     ctx.strokeStyle = colors[getRandomIntInclusive(0, colors.length)]
//     ctx.fillStyle = this.color;
//     ctx.fill()
//   }
//   this.update = function () {
//     if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
//       this.veloX = -this.veloX;
//     }

//     if (this.y - this.radius > window.innerWidth || this.y - this.radius < 0) {
//       this.veloY = -this.veloY;
//     }

//     this.x += this.veloX;
//     this.y += this.veloY;

//     //interactivity 

//     if (mouse.x - this.x < 100 &&
//       mouse.x - this.x > -100 &&
//       mouse.y - this.y < 100 &&
//       mouse.y - this.y > -100
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1
        
//       }
//     }
//     else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//     }

//     this.draw()
//   }
// }

// var circles = []

// function init() {

//   circles = []
//   for (let index = 0; index < 800; index++) {
//     var radius = Math.random() * 3 + 1;
//     var x = Math.random() * (innerWidth - radius * 2) + radius
//     var y = Math.random() * (innerHeight - radius * 2) + radius
//     var veloX = (Math.random() - 0.5);
//     var veloY = (Math.random() - 0.5);

//     if (index != 0) {
//       for (let j = 0; j < circles.length; j++) {
//         if (distance(x, y, circles[j].x, circles[j].y) - radius * 2 < 0) {
//           x = Math.random() * (innerWidth - radius * 2) + radius
//           y = Math.random() * (innerHeight - radius * 2) + radius
//           j = -1

//         }

//       }

//     }

//     circles.push(new Circle(x, y, veloX, veloY, radius))
//   }
// }

// init();

// function animate() {
//   requestAnimationFrame(animate)
//   can.clearRect(0, 0, innerWidth, innerHeight)

//   for (let index = 0; index < circles.length; index++) {
//     circles[index].update();
//   }
// }
// animate()

// On Thu, Apr 4, 2019 at 11:42 PM Tony Roig <antonio.roig123@gmail.com> wrote:
// var mouse = {
//     x: undefined,
//     y: undefined
//   }

//   var maxRadius = 200
//   var minRadius = 10

//   window.addEventListener('resize', function () {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     init()
//   })

//   window.addEventListener('mousemove', function (event) {
//     mouse.x = event.x
//     mouse.y = event.y
//   })
//   canvas = document.getElementById('canvas');
//   canvas.height = window.innerHeight
//   canvas.width = window.innerWidth

//   can = canvas.getContext('2d')

//   colors = [
//   '#DB2B30',
//   '#8F1D2C',
//   '#5A142A',
//   '#400D2A',
//   '#140A25',
//   ]

//   function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
//   }

//   function Circle(x, y, veloX, veloY, radius) {
//     this.x = x;
//     this.y = y;
//     this.veloX = veloX;
//     this.veloY = veloY;
//     this.radius = radius;
//     this.minRadius = radius;
//     this.color = colors[getRandomIntInclusive(0, colors.length)]

//     this.draw = function () {
//       can.beginPath()
//       can.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//       can.strokeStyle = colors[getRandomIntInclusive(0, colors.length)]
//       can.fillStyle = this.color;
//       can.fill()
//     }
//     this.update = function () {
//       if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//         this.veloX = -this.veloX;
//       }

//       if (this.y - this.radius > innerWidth || this.y - this.radius < 0) {
//         this.veloY = -this.veloY;
//       }

//       this.x += this.veloX;
//       this.y += this.veloY;

//       //interactivity 

//       if (mouse.x - this.x < 100 &&
//         mouse.x - this.x > -100 &&
//         mouse.y - this.y < 100 &&
//         mouse.y - this.y > -100
//       ) {
//         if (this.radius < maxRadius) {
//           this.radius += 1
//         }
//       }
//       else if (this.radius > this.minRadius) {
//         this.radius -= 1;
//       }

//       this.draw()
//     }
//   }

//  var circles = []
  
//   function init() {
   
//     circles = []
//     for (let index = 0; index < 800; index++) {
//       var radius = Math.random() * 3 + 1;
//       var x = Math.random() * (innerWidth - radius * 2) + radius
//       var y = Math.random() * (innerHeight - radius * 2) + radius
//       var veloX = (Math.random() - 0.5);
//       var veloY = (Math.random() - 0.5);

//       circles.push(new Circle(x, y, veloX, veloY, radius))
//     }
//   }

//   init();

//   function animate() {
//     requestAnimationFrame(animate)
//     can.clearRect(0, 0, innerWidth, innerHeight)

//     for (let index = 0; index < circles.length; index++) {
//       circles[index].update();
//     }
//   }
//   animate()