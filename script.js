"use strict"
var main = function(){
	makeLabelsNormal();
	var answers = loginGrabber();
	var username = answers[0];
	var password = answers[1];
	isEmail(username);
	username = stringFixer(username);
	if (emptyChecker(username, password) &&
		lengthChecker(password)){
		console.log(["Username: ", username],["Password: ", password]);
	}
	
}
var makeLabelsNormal = function(){
	changeLabelValue("usernamelabel", "Username: ");
	changeLabelValue("passwordlabel", "Password: ");
	changeLabelColor("usernamelabel", "white");
	changeLabelColor("passwordlabel", "white");
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
var stringFixer = function(username){
	username = username.toLowerCase();
	username = username.trim();
	username = username.replace(/ /g, '')
	return username;
}
var lengthChecker = function(password){
	if (password.length > 18){
		changeLabelValue("passwordlabel", "Too long!");
		changeLabelColor("passwordlabel", "red");
		return false
	}
	else if (password.length < 6) {
		changeLabelValue("passwordlabel", "Too short!");
		changeLabelColor("passwordlabel", "red");
		return false
	}
	else{
		return true
	}
}
var emptyChecker = function(username, password){
	if (username === "" && password === "") {
		document.getElementById("usernamelabel").style.color = "red";
		document.getElementById("usernamelabel").innerHTML = "No username!";
		document.getElementById("passwordlabel").style.color = "red";
		document.getElementById("passwordlabel").innerHTML = "No password!";
	}
	else if (username === "") {
		document.getElementById("usernamelabel").style.color = "red";
		document.getElementById("usernamelabel").innerHTML = "No username!";
	}
	else if (password === "") {
		document.getElementById("passwordlabel").style.color = "red";
		document.getElementById("passwordlabel").innerHTML = "No password!";
	}
	else{
		return true
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
	x.style.color="#66B2FF";
	x.style.color = "#66B2FF";
}
function change2(x){
	x.style.color="white";
	x.style.color = "white";
}