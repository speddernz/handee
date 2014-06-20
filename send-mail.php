<?php 
	
//echo(success);
	
define('RECIPIENT','merran@handeesigns.co.nz');
	
//set email body and headers
$body = $_POST['message']."\n\n";
$body.= $_POST['name'].'<'.$_POST['email'].'>';
$headers = 'From: '.$_POST['name'].'<'.$_POST['email'].'>'."\r\n";

//send email
if(mail(RECIPIENT, $_POST['subject'], $body, $headers)){
		
	echo "success";
	
} else {
	
	echo "error";
	
}//end if else
	
?>