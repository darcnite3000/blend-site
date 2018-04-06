<?php
global $apiKey;
$apiKey = '340d1d4511458cec4f007de848fb87ad-us15';
global $listId;
$listId = 'c3d255b1d6';

global $purposes;
global $defaultPurpose;
$defaultPurpose = 'other enquiries';
$purposes = array(
  'new broker enquiries'=>'broker@blendinsurance.com.au',
  'existing broker submissions'=>'submissions@blendinsurance.com.au',
  'claims enquiries'=>'claims@fullertonhealthcs.com.au',
  $defaultPurpose=>'chris@blendinsurance.com.au'
);
