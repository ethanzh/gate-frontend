"use strict"
var test = ["ethanzh", "E38243874", "E38243874", "ethan.houston@gmail.com"];

var main = function(){
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
