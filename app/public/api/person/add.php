<?php

require 'common.php';

$db = DBConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO People (firstName, lastName, street, city, state, zipcode, radioNumber, stationNumber, gender, email, position, isActive, dateofBirth)
  Values (?, ?, ?, ?, ?, ?)'
);

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
  $_POST['position'],
  $_POST['isActive'],
  $_POST['dateofBirth']
]);

$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php


header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../person/?id=' . $pk);
