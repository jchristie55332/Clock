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

clockCounter.displayName = function() {
  $(".everything").removeClass("hidden")
  $(".about_info").addClass("hidden")
  $(".work_info").addClass("hidden")
  $(".contact_info").addClass("hidden")
}


  clockCounter.displayTime = function(){
    $("#time").toggleClass("hidden")
  };

  clockCounter.displayAbout = function(){
    $(".everything").addClass("hidden")
    $(".about_info").removeClass("hidden")
    $(".work_info").addClass("hidden")
    $(".contact_info").addClass("hidden")
  }

  clockCounter.displayWork = function(){
    $(".everything").addClass("hidden")
    $(".work_info").removeClass("hidden")
    $(".about_info").addClass("hidden")
    $(".contact_info").addClass("hidden")
  }

  clockCounter.displayContact = function(){
    $(".everything").addClass("hidden")
    $(".contact_info").removeClass("hidden")
    $(".about_info").addClass("hidden")
    $(".work_info").addClass("hidden")
  }

$(function(){
  clockCounter.updateRegularly();
  $(".circle").on("mouseover", clockCounter.displayTime)
  $(".circle").on("mouseout", clockCounter.displayTime)
  $(".name").on("click", clockCounter.displayName)
  $(".about").on("click", clockCounter.displayAbout)
  $(".work").on("click", clockCounter.displayWork)
  $(".contact").on("click", clockCounter.displayContact)



});
