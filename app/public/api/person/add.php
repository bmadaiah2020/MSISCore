<?php

require 'common.php';

$db = DBConnection::getConnection();

$stmt = $db->prepare(
  *INSERT INTO People (firstName, lastName, position, radioNumber, stationNumber, street, city, state, zipcode)
  Values (?, ?, ?, ?, ?, ?)*
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['email'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid=' . $guid);
