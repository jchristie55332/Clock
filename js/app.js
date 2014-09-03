window.onload = function(){
  //canvas initialization
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  //dimensions
  var W = canvas.width;
  var H = canvas.height;
  //Variables
  var degrees = 0;
  var color = "lightblue";
  var bgcolor = "#222";
  
  function init()
  {
    //Clear the canvas everytime a chart is drawn
    ctx.clearRect(0, 0, W, H);
    
    //Background 360 degree arc
    ctx.beginPath();
    ctx.strokeStyle = bgcolor;
    ctx.lineWidth = 30;
    ctx.arc(W/2, H/2, 100, 0, Math.PI*2, false); //you can see the arc now
    ctx.stroke();
    
    //gauge will be a simple arc
    //Angle in radians = angle in degrees * PI / 180
    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 30;
    //The arc starts from the rightmost end. If we deduct 90 degrees from the angles
    //the arc will start from the topmost end
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
    //you can see the arc now
    ctx.stroke();
  }
  
  function draw()
  {
    //random degree from 0 to 360
    var seconds = new Date().getSeconds();
    console.log(seconds)
    degrees = seconds*6;
    init();
  }
  
  //function to make the chart move to new degrees 
  
  //Lets add some animation for fun
  draw();
  redraw_loop = setInterval(draw, 1000); //Draw a new chart every 2 seconds
  
  
  
  
}