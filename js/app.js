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
  
    var radians_4 = degrees_4 * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 150;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians_4 - 90*Math.PI/180, false); 
    ctx.stroke();

    var radians_3 = degrees_3 * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 120;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians_3 - 90*Math.PI/180, false); 
    ctx.stroke();

    var radians_2 = degrees_2 * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 90;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians_2 - 90*Math.PI/180, false); 
    ctx.stroke();

    
    var radians_1 = degrees_1 * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 60;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians_1 - 90*Math.PI/180, false); 
    ctx.stroke();

    var radians = degrees * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 30;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false); 
    ctx.stroke();

    var radian = degree * Math.PI / 180;
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.arc(W/2, H/2, 100, 0 - 90*Math.PI/180, radian - 90*Math.PI/180, false); 
    ctx.stroke();
  }
  
  function draw()
  {
    //random degree from 0 to 360
    var milli = new Date().getMilliseconds();
    var seconds = new Date().getSeconds();
    var mins = new Date().getMinutes();
    var hours = new Date().getHours();
    var day = new Date().getDay();
    var month = new Date().getMonth();
    degree = milli*3.6
    degrees = seconds*6;
    degrees_1 = mins*6
    degrees_2 = hours*15
    degrees_3 = day*51
    degrees_4 = month*30

    init();
    console.log(new Date().getDay())

  }
  
  //function to make the chart move to new degrees 
  
  //Lets add some animation for fun
  draw();
  redraw_loop = setInterval(draw, 1000); //Draw a new chart every 2 seconds
  
  
  
  
}