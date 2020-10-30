<?php

require 'common.php';

$db = DBConnection::getConnection();

$stmt = $db->prepare(
  *INSERT INTO Person_Certification (CertificationID, certifyingAgency, certificationName, standardExpiry)
  Values (?, ?, ?, ?)*
);

$stmt->execute([
  $_POST['CertificationID'],
  $_POST['certifyingAgency'],
  $_POST['certificationName'],
  $_POST['standardExpiry'],
]);

header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid=' . $guid);
