<?php
include 'connect-alt.php';
$query = "SELECT password FROM maindb WHERE username = $user";
$result = mysql_query($cxn, $query) or die ("Couldn’t execute query.");
If $result = $pass then (
	#BACK TO JS SUCCESSFUL LOGIN#
);
Else (
    #BACK TO JS FAILED LOGIN#
);
?>