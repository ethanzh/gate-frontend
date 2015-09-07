"use strict"
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
}

$(document).ready(function(){
	$( "#usr" ).mouseover(function() {
	  $("#usr").css("background-color", "#66B2FF");
	});
	$( "#usr" ).mouseleave(function() {
	  $("#usr").css("background-color", "white");
	});
	$( "#pas" ).mouseover(function() {
	  $("#pas").css("background-color", "#66B2FF");
	});
	$( "#pas" ).mouseleave(function() {
	  $("#pas").css("background-color", "white");
	});
});

