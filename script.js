"use strict"
var testLogIn = ["ethanzh", "E38243874"]
var testSignUp = ["ethanzh", "E38243874", "E38243874", "ethan.houston@gmail.com"];
var mainLogIn = function(){
	makeLabelsNormal();
	var answers = loginGrabber();
	/*var username = answers[0];
	var password = answers[1];*/
	var username = testLogIn[0];
	var password = testLogIn[1];
	isEmail(username);
	username = stringFixer(username);
	if(checkAll(username, password)){
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
	else{
		$('#forms')[0].reset();
	}
}

var sendNewUserToDatabase = function(username, password, email){
	
}
var mainSignUp = function(){
	var inputs = signUpGrabber();
	/*var newusername = inputs[0];
	var newpassword = inputs[1];
	var passwordconf = inputs[2];
	var email = inputs[3];*/
	var newusername = testSignUp[0];
	var newpassword = testSignUp[1];
	var passwordconf = testSignUp[2];
	var email = testSignUp[3];
	if (signUpCheckAll(newusername, newpassword, passwordconf, email)) {
		console.log(["Username: ", newusername]);
		console.log(["Password: ", newpassword]);
		console.log(["Password Confirmation: ", passwordconf]);
		console.log(["Email: ", email]);
		$('#signupsheet')[0].reset();
		sendNewUserToDatabase(newusername, newpassword, email);
	}
	else{
		console.log("NOPE")
		$('#signupsheet')[0].reset();
	}
	
}
var passwordCheck = function(password, newpassword){
	if (password !== newpassword) {
		return false;
	}
	else{
		return true;
	}
}
var signUpCheckAll = function(username, password, passwordconf, email){
	if (emptyChecker(username, password) &&
		emptyChecker(passwordconf, email) &&
		lengthChecker(password) &&
		checkCap(password) &&
		passwordCheck(password, passwordconf)
		){
		return true;
	}
}
var signUpGrabber = function(){
	var newusername = $("#usernamesignup").val();
	var newpassword = $("#passwordsignup").val();
	var passwordconf = $("#passwordconfirm").val();
	var email = $("#email").val();
	return [newusername, newpassword, passwordconf, email];
}
var checkCap = function(password){
	var length = password.length;
	for(var i = 0; i < length; i++){
		if ((password[i] >= 'A') && (password[i] <= 'Z')) {
			return true;
		}
	}
	changeLabelValue("passwordlabel", "Need at least 1 capital letter!");
	changeLabelColor("passwordlabel", "red");
}
var checkAll = function(username, password){
	if (emptyChecker(username, password) &&
		lengthChecker(password) &&
		hasNumber(password) &&
		checkCap(password)){
		return true;
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
		$(idAdder(id)).css("color", color);
	}	
}
var changeLabelValue = function(id, label){
	if (typeof id === 'string' && typeof label === 'string') {
		$(idAdder(id)).text(label);
	}
}
var idAdder = function(id){
	return ("#" + id);
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
var lengthChecker = function(password){
	if (password.length > 32){
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
var headerColor = function(){
	var elem = document.getElementById("mainheading");
	var newAns = "";
	for(var a = 0,l = elem.innerHTML.length; a < l;a++){
		newAns += '<span onmouseover="change1(this)" onmouseout="change2(this)" >' +
		elem.innerHTML.charAt(a)+'</span>';
	}
	elem.innerHTML = newAns;
	function change1(x){
		x.style.color="#A9D5F3";
	}
	function change2(x){
		x.style.color="white";
		x.style.color = "white";
	}
}
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
	location.href="signup.html";
})
$("#signin").click(function() {
	location.href="index.html";
})
