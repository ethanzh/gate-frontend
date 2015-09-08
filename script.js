"use strict"
var main = function(){
	makeLabelsNormal();
	var answers = loginGrabber();
	stringFixer(answers[0], answers[1]);
	emptyChecker(answers[0], answers[1]);
	lengthChecker(answers[1]);
	isEmail(answers[0]);
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
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "Too long!");
	}
	else if (password.length > 1 && password.length < 8) {
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "Too short!");	
	}
}
var emptyChecker = function(username, password){
	if (username === "" && password === "") {
		changeLabelColor("usernamelabel", "red");
		changeLabelValue("usernamelabel", "Empty!")		
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "Empty!")
	}
	else if (username === "") {
		changeLabelColor("usernamelabel", "red");
		changeLabelValue("usernamelabel", "Empty!")		
	}
	else if (password === "") {
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "Empty!")
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

var elem = document.getElementById("mainheading");
var newAns = "";
for(var a = 0,l = elem.innerHTML.length; a < l;a++){
	newAns += '<span onmouseover="change1(this)" onmouseout="change2(this)" >' +
	elem.innerHTML.charAt(a)+'</span>';
}
elem.innerHTML = newAns;
function change1(x){
	x.style.color = "#66B2FF";
}
function change2(x){
	x.style.color = "white";
}
