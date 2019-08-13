import React from 'react';
import styled from 'styled-components';
const drops = `http://localhost:4001/images/sprites/drops.png`
// const poring = `http://localhost:4001/images/sprites/poring.png`

const Imgage = styled.img`
display:none;
`

const CanvasWrapper = styled.div`
margin: 0 auto;
width:50%;
`
const tileSize = 50

// const map = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];


// draw: function(){
//   var self = this;
//   this.context.clearRect(0, 0, this.w, this.h);
//     this.context.fillStyle = "rgba(255,0,0,0.6)";
//   _(this.map).each(function(row,i){
//     _(row).each(function(tile,j){
//       if(tile !== 0){ //if tile is not walkable
//         self.drawTile(j,i); //draw a rectangle at j,i
//       }
//     });
//   });
// },


class Tile {
    //maybe pass canvas here
    constructor(column, row, x, y, tileSize, ctx) {
        this.column = column;
        this.row = row;
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.ctx = ctx;
        this.draw = () => {
            this.ctx.strokeRect(
                this.x, this.y,
                this.tileSize, this.tileSize
            )
        };
        this.colorIn = (color) => {
            this.ctx.fillRect(
                this.x, this.y,
                this.tileSize, this.tileSize
            )
            this.ctx.fillStyle = color;

        }
    }
}

const mapGen = (canvas) => {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < (ctx.canvas.width / tileSize); i++) {
        for (let j = 0; j < (ctx.canvas.height / tileSize); j++) {
            // tiles[i][j] = new Tile(i, j, i * tileSize, j * tileSize, tileSize, ctx) 
            tiles.push(new Tile(i, j, i * tileSize, j * tileSize, tileSize, ctx))
        }
    }
    // console.log(tiles)
}

const tiles = []

class Sprite {
    constructor(ctx, img, canvasX, canvasY, width, height, frame) {
        this.ctx = ctx;
        this.img = img;
        this.canvasX = canvasX;
        this.canvasY = canvasY;
        this.width = width;
        this.height = height;
        this.column = () => {
            return this.canvasX / tileSize
        }
        this.row = () => {
            return this.canvasY / tileSize
        }
        this.draw = (frame) => {
            switch (frame) {
                case 1:
                    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                    this.ctx.drawImage(this.img, 0, 0, this.width / 2, this.height / 2, this.canvasX, this.canvasY, this.width / 2, this.height / 2)
                    break;
                case 2:
                    this.ctx.drawImage(this.img, this.width / 2, 0, this.width / 2, this.height / 2, this.canvasX, this.canvasY, this.width / 2, this.height / 2)
                    break;
                case 3:
                    this.ctx.drawImage(this.img, 0, this.height / 2, this.width / 2, this.height / 2, this.canvasX, this.canvasY, this.width / 2, this.height / 2)
                    break;
                case 4:
                    this.ctx.drawImage(this.img, this.width / 2, this.height / 2, this.width / 2, this.height / 2, this.canvasX, this.canvasY, this.width / 2, this.height / 2)
                    break;
                default:
                    break;
            }
        }
        this.boundingBox = () => {
            ctx.strokeStyle = 'green';
            this.ctx.strokeRect(this.canvasX, this.canvasX, (this.width / 2) + 1, (this.height / 2) + 1)
            return (this.canvasX, this.canvasX, (this.width / 2) + 1, (this.height / 2) + 1)
        }
        this.move = (target) => {
            if (this.column() === target.column && this.row() === target.row) {
                console.log('sprite is in same tile as target')            
            }
            else{
                console.log(target.column - this.column())
                return (
                    this.canvasX += (target.column - this.column()) *50,
                    this.canvasY += (target.row - this.row()) *50
                )
            }             
        }

        //     if (targetX < this.canvasX + tileSize && targetX > this.canvasX) {
        //         if (targetY < this.canvasY + tileSize && targetY > this.canvasY) {                    
        //             return(element.column, element.row)
        //         }
        //     }

        //         this.canvasY += 50
        //     }
    }
}


class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: 0,
        };
        this.gameState = {
            activeUnit: this.poring,
            mobs: [{}]
        }
        this.frameUpdate = this.frameUpdate.bind(this);
    }

    componentDidMount() {
        this.intializeCanvas()

        requestAnimationFrame(this.frameUpdate)
    }

    componentDidUpdate() {
        this.draw(this.refs.canvas.getContext("2d"));
    }

    intializeCanvas() {
        this.canvas = this.refs.canvas
        this.ctx = this.refs.canvas.getContext("2d");
        this.poring = new Sprite(this.ctx, this.refs.image, 0, 0, 82, 78)
        mapGen(this.canvas)
        // window.addEventListener('keydown', (e) => {
        //     if (e.keyCode === 40) {
        //         console.log('down pressed')
        //         this.poring.move('down')
        //         return true
        //     } else { return false }
        // }, false)
        this.canvas.addEventListener('click', event => {
            let rect = this.canvas.getBoundingClientRect();
            let mouseX = event.clientX - rect.left
            let mouseY = event.clientY - rect.top
            let targetElement;

            //  console.log(`mouseX: ${mouseX} mouseY: ${mouseY}`)
            tiles.forEach(element => {
                // if (mouseX < element.x + element.tileSize && mouseX > element.x) {
                //     if (mouseY < element.y + element.tileSize && mouseY > element.y) {
                //         console.log(`x:${element.column} y: ${element.row}`)
                //         console.log(element)                        
                //        return element
                //     }
                // } 

                if (mouseX < element.x + element.tileSize && mouseX > element.x && mouseY < element.y + element.tileSize && mouseY > element.y) {
                    console.log(`x:${element.column} y: ${element.row}`)
                    targetElement = element
                    return element
                }
            });
            this.poring.move(targetElement)
            console.log(targetElement)
        }, false);

        this.draw = () => {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            if (this.state.frame <= 1) {
                this.poring.draw(1)
            }
            if (this.state.frame > 1 && this.state.frame < 2) {
                this.poring.draw(2)
            }
            if (this.state.frame > 2 && this.state.frame < 3) {
                this.poring.draw(3)
            }
            if (this.state.frame > 3 && this.state.frame < 4) {
                this.poring.draw(4)
            }
            if (this.state.frame >= 4) {
                this.setState({ frame: 0 })
            }
            tiles.forEach((element) => {
                element.draw()
            })
        }
    }

    frameUpdate() {
        this.setState({ frame: this.state.frame + 0.075 });
        requestAnimationFrame(this.frameUpdate);
        ;
    }

    render() {
        return (
            <CanvasWrapper>
                <canvas
                    ref="canvas"
                    width={800}
                    height={600}
                />
                <Imgage ref="image" src={'http://localhost:4001/images/sprites/poring.png'} />
                <Imgage ref="image2" src={drops} />
            </CanvasWrapper>
        );
    }
}

export default Canvas