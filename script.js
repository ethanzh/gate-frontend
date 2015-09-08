"use strict"
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	username = username.toLowerCase();
	username = username.trim();
	console.log(username + " " + password);
	console.log(isEmail(username));
}
var isEmail = function(input){
	if (input.indexOf("@") > 0){
		return true
	}
	else{
		return false
	}
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
