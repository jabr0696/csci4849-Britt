$(document).ready(function() { // do this when the document is loaded
 $("#content_dialer").show(); // show the element with ID "element"
 $("#content_add").hide(); // hide the element with ID "otherElement"
 $("#content_list").hide();
 $("#content_gesture").hide();
});

$("#tab_dialer").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
  $("#content_add").hide();
  $("#content_gesture").hide();
});

$("#tab_list").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_add").hide();
  $("#content_gesture").hide();
});

$("#tab_add").click(function() { // when "button_id" is clicked
	$("#content_add").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_list").hide();
  $("#content_gesture").hide();
});

$("#tab_gesture").click(function() { // when "button_id" is clicked
	$("#content_gesture").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_list").hide();
  $("#content_add").hide();
});
$("#butt1").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "1")
});
$("#butt2").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "2")
});
$("#butt3").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "3")
});
$("#butt4").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "4")
});
$("#butt5").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "5")
});
$("#butt6").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "6")
});
$("#butt7").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "7")
});
$("#butt8").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "8")
});
$("#butt9").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "9")
});
$("#butt0").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "0")
});
$("#buttHash").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "#")
});
$("#buttStar").click(function(){
  $("#dialerIn").val($("#dialerIn").val() + "*")
});
$("#buttClear").click(function(){
  $("#dialerIn").val("")
});

$("#add_clear").click(function(){
  $("#email").val("")
  $("#phoneNum").val("")
  $("#name").val("")
});
$("#gesture_area").click(function(){
  var downX = 0;
  var downY = 0;
  var upX;
  var upY;
  $("#gesture_area").mouseup(function(){
    upX = event.pageX
    upY = event.pageY
    if (upX < downX){
      $("#gesture_output").val("Swipe left")
    }
    else if (upX > downX){
      $("#gesture_output").val("Swipe right")
    }
    else if (upX == downX){
      $("#gesture_output").val("Mouse up")
    }
  });
  $("#gesture_area").mousedown(function(event){
    $("#gesture_output").val("Mouse Down")
    downX = event.pageX
    downY = event.pageX
  });

});
