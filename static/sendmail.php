<?php
$post = json_decode(file_get_contents('php://input'),true);
$purpose=$post['purpose'];
$name=$post['name'];
$email=$post['email'];
$message=$post['message'];
$to = '';
switch ($purpose) {
  case 'new broker enquiries':
    $to = 'broker@blendinsurance.com.au';
    break;
  case 'existing broker submissions':
    $to = "submissions@blendinsurance.com.au";
    break;
  case 'claims enquiries':
    $to = 'claims@fullertonhealthcs.com.au';
    break;
  default:
    $to = 'chris@blendinsurance.com.au';
}
$mailBody = $message. "\r\n". "\r\n"."from: $name<$email>";
mail($to,$purpose,$mailBody,$headers);
