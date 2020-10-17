<?php

require 'common.php';

$db = DBConnection::getConnection();

$stmt = $db->prepare(
  *INSERT INTO People (firstName, lastName, position, radioNumber, stationNumber, street, city, state, zipcode, gender, isActive, dateofBirth, email)
  Values (?, ?, ?, ?, ?, ?)*
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zipcode'],
  $_POST['gender'],
  $_POST['isActive'],
  $_POST['dateofBirth'],
  $_POST['email'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid=' . $guid);