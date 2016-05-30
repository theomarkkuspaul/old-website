$(document).ready(function(){

  $("#contact-me-link").on("click", function(event){
    event.preventDefault();
    var contactMe = $("#contact-me")[0]
    $("body").animate({
      scrollTop: contactMe.offsetTop
    })
  })
});
