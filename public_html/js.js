//
//$(document).ready(function(){
//
//  // jQuery methods go here...
//
//});

$(function () {
   
   // $("#kedz").click(init());
   $("#kezd").on("click",init);
    
});
function init(){
   // alert("hahó");
//   $("div").eq(0).text("ide ird");
//   alert($("div").eq(0).text());
//   $("div").eq(0).html("<b>ide ird<b>");
//   $("div").eq(1).append("<b>ide ird<b>");
   $("#jatekter").empty();
    for (var i = 0; i < 5; i++) {
//        $("#jatekter").append("<img src='kep.png' alt='kep'/>");
$("#jatekter").append("<div>");
$("#jatekter div").eq(i).append("<img>");
// $("#jatekter img").attr("src","kep.png"); 
//  $("#jatekter img").attr("alt","kartyalap");  
  $("#jatekter div img").eq(i).attr({"src":"kep.png","alt":"kartyalap"}); 
    }
 $("#jatekter div").css("background-color","cyan");
 $("#jatekter div").mouseenter(function () {
            $(this).css("background-color","red");
        })
        $("#jatekter div").mouseleave(function () {
            $(this).css("background-color","cyan");
        })
   
}





