$(document).ready(function(){
  $("#hideMe").click(function(){
    $("img").hide()
  })

  $("#showMe").click(function(){
    $('img').show()
  })
$(".example").dblclick(function(){
  $(this).toggleClass("change")
})
$("#add").click(function(){
  $("ul").append("<li>three</li>")
})
$(".hover").hover(function(){
  $(this).toggleClass("change1");
  })
  $(".help").mouseleave(function(){
    $(".help").slideUp("slow");
  })
  $(".yell").hover(function() {
    $(this).fadeOut()

  })
  $(".dope").click(function(){
  $(".yell").fadeIn()
})
$("p").hover(function () {
  $(this).toggleClass("p1")

})
})
