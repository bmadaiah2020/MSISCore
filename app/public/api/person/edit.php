<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'UPDATE Person SET firstName = ? ,lastName = ?,street = ?,city = ?,state = ?,zipcode = ?,radioNumber = ?, stationNumber = ?, gender = ?, email = ?,position = ?,isActive = ?, dateofBirth= ?, mobileNumber = ?, workNumber = ?
  WHERE PersonalID =?');

$stmt->execute([
 $_POST['firstName'],
 $_POST['lastName'],
 $_POST['street'],
 $_POST['city'],
 $_POST['state'],
 $_POST['zipcode'],
 $_POST['radioNumber'],
 $_POST['stationNumber'],
 $_POST['gender'],
  $_POST['email'],
 $_POST['postion'],
 $_POST['isActive'],
 $_POST['dateofBirth'],
 $_POST['mobileNumber'],
 $_POST['workNumber'],
  $_POST['PersonalID']
 ]);

$person_id = $_POST['PersonalID'];
//
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../person/?PersonalID=' .$person_id);
