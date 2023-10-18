<?php

require('connection.php');

// Create connection
$conn = new mysqli($host, $user, $password, $db);
// Check connection

$phonenumber = $_GET['phonenumber'];

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT email, phonenumber FROM signupuser WHERE phonenumber='$phonenumber' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while
  (
      $row = $result->fetch_assoc()
  )
  
  {
    echo json_encode (array('Email'=>$row['email'], 'Phone' =>$row['phonenumber']));
  }
} else {
  echo json_encode (array('Error'=>'False'), JSON_FORCE_OBJECT);
}
$conn->close();
?>