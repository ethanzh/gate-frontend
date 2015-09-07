"use strict"
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	console.log(username + " " + password);
	var userpass = [username, password];
	return userpass;
}
console.log(userpass[0])
$(document).ready(function(){
	$( "#user" ).mouseover(function() {
	  $("#user").css("background-color", "#A9D5F3");
	});
	$( "#user" ).mouseleave(function() {
	  $("#user").css("background-color", "#66B2FF");
	});
	$( "#pas" ).mouseover(function() {
	  $("#pas").css("background-color", "#A9D5F3");
	});
	$( "#pas" ).mouseleave(function() {
	  $("#pas").css("background-color", "#66B2FF");
	});
});

