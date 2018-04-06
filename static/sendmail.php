<?php
$post = json_decode(file_get_contents('php://input'),true);
$purpose=$post['purpose'];
$name=$post['name'];
$email=$post['email'];
$message=$post['message'];
$marketing=$post['marketing'] == true || $post['marketing'] == "true";
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
    $purpose = 'other enquiries';
    $to = 'chris@blendinsurance.com.au';
    break;
}
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
  $apiKey = '340d1d4511458cec4f007de848fb87ad-us15';
  $listId = 'c3d255b1d6';

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
