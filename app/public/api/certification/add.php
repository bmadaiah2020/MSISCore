<?php

require 'common.php';

$db = DBConnection::getConnection();

$stmt = $db->prepare(
  *INSERT INTO Person_Certification (PersonalID, CertificationID, expirationDate, certificationStatus, renewedDate)
  Values (?, ?, ?, ?, ?)*
);

$stmt->execute([
  $_POST['PersonalID'],
  $_POST['CertificationID'],
  $_POST['expirationDate'],
  $_POST['certificationStatus'],
  $_POST['renewedDate'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid=' . $guid);
