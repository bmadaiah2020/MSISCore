<?php

require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO Person_Certification (PersonalID, CertificationID, expirationDate, renewedDate)
  Values (?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['PersonalID'],
  $_POST['CertificationID'],
  $_POST['expirationDate'],
  $_POST['renewedDate']
]);

header('HTTP/1.1 303 See Other');
header('Location: ../reports/?guid=' . $guid);
