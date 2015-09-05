"use strict"
var loginGrabber = function(){
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	passwordLength(password)
}
var passwordLength = function(password){
	if(password.length < 8){
		document.getElementById("tooshort").innerHTML = "Paragraph changed!";
	}
}