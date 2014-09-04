var clockCounter = clockCounter || {};

clockCounter.getTime = function(){
  var time = new Date();
  $("#time").html("<h2>"+time+"</h2>")
}

clockCounter.updateRegularly = function() {
  setInterval(function() {
    clockCounter.getTime();
  }, 1000);
}

$(function(){
  clockCounter.updateRegularly();
  $(".circle").on("mouseover", clockCounter.displayTime)
  $(".circle").on("mouseout", clockCounter.displayTime)



});
