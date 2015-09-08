"use strict"
var main = function(){
	makeLabelsNormal();
	var answers = loginGrabber();
	stringFixer(answers[0], answers[1]);
	emptyChecker(answers[0], answers[1]);
	lengthChecker(answers[1]);
}
var makeLabelsNormal = function(){
	changeLabelValue("usernamelabel", "Username: ");
	changeLabelValue("passwordlabel", "Password: ");
	changeLabelColor("usernamelabel", "black");
	changeLabelColor("passwordlabel", "black");
}
var changeLabelColor = function(id, color){
	if (typeof id === 'string' && typeof color === 'string') {
		document.getElementById(id).style.color = color;
	}	
}
var changeLabelValue = function(id, label){
	if (typeof id === 'string' && typeof label === 'string') {
		document.getElementById(id).innerHTML = label;
	}
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
var lengthChecker = function(password){
	if (password.length > 18){
		changeLabelValue("passwordlabel", "Too long!");
	}
	else if (password.length < 6) {
		changeLabelValue("passwordlabel", "Too short!");
	}
}
var emptyChecker = function(username, password){
	if (username === "") {
		document.getElementById("usernamelabel").style.color = "red";
		document.getElementById("usernamelabel").innerHTML = "No username!";
	}
	else if (password === "") {
		document.getElementById("passwordlabel").style.color = "red";
		document.getElementById("passwordlabel").innerHTML = "No password!";
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
