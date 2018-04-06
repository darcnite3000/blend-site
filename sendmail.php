<?php
include 'config.php';
$post = json_decode(file_get_contents('php://input'),true);
$purpose=$post['purpose'];
$name=$post['name'];
$email=$post['email'];
$message=$post['message'];
$marketing=$post['marketing'] == true || $post['marketing'] == "true";
$to = '';
global $purposes;
global $defaultPurpose;
if(!isset($purposes[$purpose])){
  $purpose = $defaultPurpose;
}
$to = $purposes[$purpose];
$mailBody = $message. "\r\n". "\r\n"."from: $name<$email>"."\r\n"."Marketing: ".($marketing?"yes":"no");
mail($to,$purpose,$mailBody,$headers);

if($marketing){
  $data = [
    'email' => $email,
    'status' => 'subscribed',
    'name' => $name
  ];

  syncMailchimp($data);
}

function syncMailchimp($data) {
  global $apiKey;
  global $listId;
  $memberId = md5(strtolower($data['email']));
  $dataCenter = substr($apiKey,strpos($apiKey,'-')+1);
  $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $listId . '/members/' . $memberId;

  $json = json_encode([
      'email_address' => $data['email'],
      'status'        => $data['status'], // "subscribed","unsubscribed","cleaned","pending"
      'merge_fields'  => [
          'NAME'     => $data['name']
      ]
  ]);

  $ch = curl_init($url);

  curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json);

  $result = curl_exec($ch);
  $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

  return $httpCode;
}
