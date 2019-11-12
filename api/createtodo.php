<?php

require_once('mysqlconnect.php');

$insertQuery = "INSERT INTO `items` 
                (`title`, `description`, `added`, `completed`) 
                VALUES ($title, $description, NOW(), $completed)";

$result = mysqli_query($db, $insertQuery);

if(!$result){
  print('Insert query failed'.mysqli_error($db));
  exit();
}

print(json_encode(['success' => true]));

?>