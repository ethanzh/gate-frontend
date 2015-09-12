"use strict"
var test = ["ethanzh", "E38243874"]

var main = function(){
	makeLabelsNormal();
	var answers = loginGrabber();
	/*var username = answers[0];
	var password = answers[1];*/
	var username = test[0];
	var password = test[1];
	var emailStatus = isEmail(username);
	username = stringFixer(username);
	if (true) {
		console.log(["Username: ", username]);
		console.log(["Password: ", password]);
		$('#forms')[0].reset();
		$("#mainheading").text("Success!");
		$(".userspace").css("background-color", "#00FF00");
		mouseHover("#usr", "#pas", "#00FF00", "#00FF00");
		$("#usr").mouseover(function() {
			$("#usr").css("background-color", "#D1FFC1");
		});
		$("#pas").mouseover(function() {
			$("#pas").css("background-color", "#D1FFC1");
		});
		/*
		 *
		 *Do jQUERY/AJAX STUFF
		 *
		 * Find out how to POST/GET to MySQL DB
		 *
		 */
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
var stringFixer = function(username){
	username = username.toLowerCase();
	username = username.trim();
	username = username.replace(/ /g, '')
	return username;
}

var emptyChecker = function(username, password){
	if (username === "" && password === "") {
		changeLabelColor("usernamelabel", "red");
		changeLabelValue("usernamelabel", "No username!");
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "No password!");
	}
	else if (username === "") {
		changeLabelColor("usernamelabel", "red");
		changeLabelValue("usernamelabel", "No username!");
	}
	else if (password === "") {
		changeLabelColor("passwordlabel", "red");
		changeLabelValue("passwordlabel", "No password!");
	}
	else{
		return true;
	}
}
var isEmail = function(input){
	if (input.indexOf("@") > 0 && input.indexOf(".") > 0){
		return true;
	}
	else{
		return false;
	}
}
var hasNumber = function(password){
	var length = password.length;
	for(var i = 0; i < length; i++){
		if (!isNaN(password[i])) {
			return true;
		}
	}
	changeLabelValue("passwordlabel", "Need at least 1 number!");
	changeLabelColor("passwordlabel", "red");
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

mouseHover("#usr", "#pas", "#A9D5F3", "#66B2FF");
$("#passwordtip").mouseover(function() {
	$("#passwordtip").css("cursor", "pointer");
});
$("#passwordtip").click(function() {
	alert("1. Must be 6 or more characters \r\n" +
		  "2. Must be less than 36 characters \r\n" +
		  "3. Must contain at least 1 number");
})
$("#signup").click(function() {
	location.href="http://login.yaoshi.io/signup.html";
})

