"use strict"
var main = function(){
	var answers = loginGrabber();
	stringFixer(answers[0], answers[1]);
	emptyChecker(answers[0], answers[1]);
}
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	return [username, password];
}
var stringFixer = function(username, password){
	username = username.toLowerCase();
	username = username.trim();
	username = username.replace(/ /g, '')
}
var emptyChecker = function(username, password){
	if (username === "") {
		document.getElementById("empty").innerHTML = "No username!";
	}
	else if (password === "") {
		alert("EMPTY PASSWORD")
	}
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
