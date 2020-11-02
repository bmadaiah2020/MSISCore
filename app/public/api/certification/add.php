<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Certification (certifyingAgency, certificationName, standardExpiry)
  Values (?, ?, ?)'
);

$stmt->execute([
  $_POST['certifyingAgency'],
  $_POST['certificationName'],
  $_POST['standardExpiry']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../certification/');
