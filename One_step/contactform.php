<?php
if (isset($POST['submit'])){
  $name =$POST['name'];
  $last_name =$POST['lastname'];
  $mailFrom =$POST['mail'];
  $message =$POST['message'];

$mailTo = "kate_sarant@yahoo.gr";
$headers = "From: ".$mailFrom;
$txt ="You have received an e-mail from ".$name.$last_name.".\n\n".$message;



mail($mailTo,$message,$txt,$headers)
header("Location: about_us.php?mailsend");


}


?>
