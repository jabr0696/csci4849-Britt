$(document).ready(function() { // do this when the document is loaded
 $("#content_dialer").show(); // show the element with ID "element"
 $("#content_add").hide(); // hide the element with ID "otherElement"
 $("#content_list").hide();
});

$("#tab_dialer").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
  $("#content_add").hide();
});

$("#tab_list").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_add").hide();
});

$("#tab_add").click(function() { // when "button_id" is clicked
	$("#content_add").show(); // show element
	$("#content_dialer").hide();	// hide other element
  $("#content_list").hide();
});
