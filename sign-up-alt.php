<?php
include 'connect-alt.php';
$queryuser = "SELECT username FROM maindb";
$resultuser = mysql_query($cxn, $query) or die (“Couldn’t execute query.”);
$queryemail = "SELECT email FROM maindb";
$resultemail= mysql_query($cxn, $query) or die (“Couldn’t execute query.”);
If $username = $resultuser then (
	echo "Username is already taken"
);
Elseif $email = $resultemail then (
    echo "Email is already registered";
);
Else (
$query = INSERT INTO LoginInfo (Username, Password, Email) VALUES ($user, $pass, $email);
$result = mysql_query($cxn, $query) or die (“Couldn’t execute query.”);
echo “Successfully Registered!”);
?>