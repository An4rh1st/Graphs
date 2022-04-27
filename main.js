"use strict";

window.onload = function(){
  
  let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  let counter_num = 0;

class point {
  constructor(word, x, y) {
    this.word = word;
    this.x = x;
    this.y = y;
    this.way = [];
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.stroke();

    ctx.font = '20px serif';
    ctx.fillText(word, x - 5, y + 5);
  }
}

let points = [];

let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
canvas.addEventListener('click', getClickXY, false);
  
function getClickXY(event) {
  let clickX = (event.layerX == undefined ? event.offsetX : event.layerX) + 1;
  let clickY = (event.layerY == undefined ? event.offsetY : event.layerY) + 1;
  if (counter_num < letters.length){
    points[counter_num] = new point (letters[counter_num], clickX, clickY);
  }
  else{
    return;
  }

  console.log(points[counter_num].x);
    
  let canvas = document.getElementById('canvas'), 
      context = canvas.getContext('2d'),
      w = canvas.width,
      h = canvas.height,
      mouse = { x:0, y:0},
      draw = false;
             
  canvas.addEventListener('mousedown', function(event){
                 
    mouse.x = event.pageX - this.offsetLeft;
    mouse.y = event.pageY - this.offsetTop;
    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
  });

    canvas.addEventListener('mousemove', function(event){
                 
      if(draw==true){
                 
        mouse.x = event.pageX - this.offsetLeft;
        mouse.y = event.pageY - this.offsetTop;
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        }

    });

    canvas.addEventListener('mouseup', function(event){
                 
      mouse.x = event.pageX - this.offsetLeft;
      mouse.y = event.pageY - this.offsetTop;
      context.lineTo(mouse.x, mouse.y);
      //context.stroke();
      context.closePath();
      draw = false;
            
    });

    counter_num++;
    
  }
}