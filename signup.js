"use strict"
var test = ["ethanzh", "E38243874", "E38243874", "ethan.houston@gmail.com"];

var main = function() {
	var inputs = signUpGrabber();
	/*var newusername = inputs[0];
	var newpassword = inputs[1];
	var passwordconf = inputs[2];
	var email = inputs[3];*/
	
	var newusername = stringFixer(test[0]); //Runs stringFixer on username
	var newpassword = test[1];
	var passwordconf = test[2];
	var email = test[3];
	
	clearFields();
	
	if (signUpCheckAll(newusername, newpassword, passwordconf, email)) {
		console.log(["Username: ", newusername]);
		console.log(["Password: ", newpassword]);
		console.log(["Password Confirmation: ", passwordconf]);
		console.log(["Email: ", email]);
		sendToDatabse(newusername, newpassword, email);
	} else{

	}
	
}

var sendToDatabse = function(newusername, newpassword, email) {
	/*
	 *
	 *	LEARN AJAX LOL
	 *
	 *	
	 */
}

var changeLabelColor = function(id, color) {
	if (typeof id === 'string' && typeof color === 'string') {
		$("#" + id).css("color", color);
	}	
}

var changeLabelValue = function(id, label) {
	if (typeof id === 'string' && typeof label === 'string') {
		$("#" + id).text(label);
	}
}

var signUpGrabber = function() {
	var newusername = $("#usernamesignup").val();
	var newpassword = $("#passwordsignup").val();
	var passwordconf = $("#passwordconfirm").val();
	var email = $("#email").val();
	return [newusername, newpassword, passwordconf, email];
}

var emptyChecker = function(username, password, passwordconf, email) {
	var idList = []
	var argList = [username, password, passwordconf, email];
	var varNames = ["usernamelabel","passwordlabel","passwordconflabel","emaillabel"];
	
	for(var j = 0; j < argList.length; j++) {
		if (argList[j] === "") {
			console.log(varNames[j] + " is EMPTY!!!");
			idList.push(varNames[j]);
		}
	}
	for(var i = 0; i < idList.length; i++) {
		changeLabelColor(idList[i], "red");
		changeLabelValue(idList[i], "Empty!");
	}
	return true;
}

var isEmail = function(input) {
	if (input.indexOf("@") > 0 && input.indexOf(".") > 0){
		return true;
	}
	else{
		return false;
	}
}

var hasNumber = function(password) {
	var length = password.length;
	for(var i = 0; i < length; i++){
		if (!isNaN(password[i])) {
			return true;
		}
	}
	changeLabelValue("passwordlabel", "Need at least 1 number!");
	changeLabelColor("passwordlabel", "red");
}

var passwordsAreSame = function(password, newpassword) {
	if (password !== newpassword) {
		return false;
	} else{
		return true;
	}
}

var signUpCheckAll = function(username, password, passwordconf, email) {
	if (!emptyChecker(username, password, passwordconf, email)) {  
    console.log("Some fields are empty!");
	} else if (!lengthChecker(password)) {
		console.log("Password isn't long enough!");
	} else if (!passwordsAreSame(password, passwordconf)) {
		console.log("Passwords don't match!");
	} else if (!checkCap(password)) {
		console.log("Password doesn't have a capital letter!");
	} else {
		return true;
	}
}

var checkCap = function(password) {
	var length = password.length;
	for(var i = 0; i < length; i++){
		if ((password[i] >= 'A') && (password[i] <= 'Z')) {
			return true;
		}
	}
	changeLabelValue("passwordlabel", "Need at least 1 capital letter!");
	changeLabelColor("passwordlabel", "red");
}

var stringFixer = function(username) {
	username = username.toLowerCase();
	username = username.trim();
	username = username.replace(/ /g, '')
	return username;
}


var lengthChecker = function(password) {
	if (password.length > 32) {
		changeLabelValue("passwordlabel", "Too long!");
		changeLabelColor("passwordlabel", "red");
		return false
	} else if (password.length < 6) {
		changeLabelValue("passwordlabel", "Too short!");
		changeLabelColor("passwordlabel", "red");
		return false
	} else{
		return true
	}
}

var clearFields = function() {
	$("#usernamesignup").val("");
	$("#passwordsignup").val("");
	$("#passwordconfirm").val("");
	$("#email").val("");
}

var passwordReq = function() {
	alert("1. Must be 6 or more characters \r\n" +
		  "2. Must be less than 36 characters \r\n" +
		  "3. Must contain at least 1 number \r\n" +
		  "4. Must contain at least 1 capital letter");
}

