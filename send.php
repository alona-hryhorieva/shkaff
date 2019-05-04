<?php
// print_r($_POST);

$to = 'alona.hryhorieva@gmail.com';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: info@".$_SERVER['HTTP_HOST']."\r\n";
$subject = $_POST['subject'];
$mess = "";
$t1 = $_POST['name'];
$t2 = $_POST['phone'];
// $t3 = $_POST['product_val'];



$mess .=  "Имя: {$t1}\n";
$mess .=  "Телефон: {$t2}\n";
// $mess .=  "Товары: {$t3}\n";





if(mail($to, $subject, $mess, $headers)){
  header('Location: thanks.html');
}