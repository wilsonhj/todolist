<?php

require_once('mysqlconnect.php');

$insertQuery = "INSERT INTO `items` 
                (`id`, `title`, `description`, `added`, `completed`) 
                VALUES (NULL, $title, $description, $added, $completed)";

$result = mysqli_query($db, $insertQuery);

if(!$result){
  print('Insert query failed'.mysqli_error($db));
  exit();
}

?>