<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
'UPDATE Certification SET CertificationID = ? ,certifyingAgency = ?,certificationName = ?,standardExpiry = ?
  WHERE CertificationID =?');

$stmt->execute([
 $_POST['CertificationID'],
 $_POST['certifyingAgency'],
 $_POST['certificationName'],
 $_POST['standardExpiry'],
  $_POST['CertificationID']
 ]);

$certification_id = $_POST['CertificationID'];
//
header('HTTP/1.1 303 See Other');
header('Content-Type: application/json');
header('Location: ../certification/?CertificationID=' .$certification_id);
