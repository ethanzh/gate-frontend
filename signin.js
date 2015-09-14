"use strict"
var test = ["ethanzh", "E38243874"]

var main = function(){
	makeLabelsNormal();
	
	var answers = loginGrabber();
	
	//var username = answers[0];
	//var password = answers[1];
	var username = test[0];
	var password = test[1];
	
	clearFields();
	
	if (emptyChecker(username, password)) {
		success(username, password);
	}
	else{
		fail();
	}
}

var success = function(username, password){
	console.log(["Username: ", username]);
	console.log(["Password: ", password]);
	//$('#forms')[0].reset();
	colorChanger("Success!", "#00FF00", "#D1FFC1");
}

var fail = function(){
	//$('#forms')[0].reset();
	colorChanger("Fail!", "red", "#FF8C8C");
}
var makeLabelsNormal = function(){
	changeLabelValue("usernamelabel", "Username: ");
	changeLabelValue("passwordlabel", "Password: ");
	changeLabelColor("usernamelabel", "white");
	changeLabelColor("passwordlabel", "white");
}

var changeLabelColor = function(id, color){
	if (typeof id === 'string' && typeof color === 'string') {
		$("#" + id).css("color", color);
	}	
}

var changeLabelValue = function(id, label){
	if (typeof id === 'string' && typeof label === 'string') {
		$("#" + id).text(label);
	}
}

var loginGrabber = function(){
	var username = $("#username").val();
	var password = $("#password").val();
	return [username, password];
}

var emptyChecker = function(username, password){
	if (username === "" && password === "") {
		changeLabelValue("usernamelabel", "Empty!");
		changeLabelValue("passwordlabel", "Empty!");
		changeLabelColor("usernamelabel", "red");
		changeLabelColor("passwordlabel", "red");
		return false;
	}
	else if (username === "") {
		changeLabelValue("usernamelabel", "Empty!");
		changeLabelColor("usernamelabel", "red");
		return false;
	}
	else if (password === "") {
		changeLabelValue("passwordlabel", "Empty!");
		changeLabelColor("passwordlabel", "red");
		return false;
	}
	else{
		return true;
	}
}

var colorChanger = function(heading, backgroundColor, hoverColor){
	$("#mainheading").text(heading);
	$(".userspace").css("background-color", backgroundColor);
	mouseHover("#usr", "#pas", backgroundColor, backgroundColor);
	$("#usr").mouseover(function() {
		$("#usr").css("background-color", hoverColor);
	});
	$("#pas").mouseover(function() {
		$("#pas").css("background-color", hoverColor);
	});
}

var mouseHover = function(firstdiv, seconddiv, firstcolor, secondcolor){
	$(document).ready(function(){
	$(firstdiv).mouseover(function() {
	  $(firstdiv).css("background-color", firstcolor);
	});
	$(firstdiv).mouseleave(function() {
	  $(firstdiv).css("background-color", secondcolor);
	});
	$(seconddiv).mouseover(function() {
	  $(seconddiv).css("background-color", firstcolor);
	});
	$(seconddiv).mouseleave(function() {
	  $(seconddiv).css("background-color", secondcolor);
	});
})};

var clearFields = function(){
	$("#textuser").val("");
	$("#textpass").val("");
}

mouseHover("#usr", "#pas", "#A9D5F3", "#66B2FF");
$("#passwordtip").mouseover(function() {
	$("#passwordtip").css("cursor", "pointer");
});

