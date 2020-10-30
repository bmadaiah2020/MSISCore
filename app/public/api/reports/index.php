<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT * FROM Person_Certification';
$vars = [];

if (isset($_GET['PersonalID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Person_Certification WHERE PersonalID = ?';
  $vars = [ $_GET['PersonalID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$reports = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($reports, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
