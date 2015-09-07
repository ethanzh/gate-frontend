"use strict"
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	console.log(username + " " + password);
}

$(document).ready(function(){
	$( "#usr" ).mouseover(function() {
	  $("#usr").css("background-color", "#A9D5F3");
	});
	$( "#usr" ).mouseleave(function() {
	  $("#usr").css("background-color", "#66B2FF");
	});
	$( "#pas" ).mouseover(function() {
	  $("#pas").css("background-color", "#A9D5F3");
	});
	$( "#pas" ).mouseleave(function() {
	  $("#pas").css("background-color", "#66B2FF");
	});
});

