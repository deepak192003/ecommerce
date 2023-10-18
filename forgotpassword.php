<?php
    include("connection.php");

    $email = $_GET['email'] ?? "";
    if ($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
      }
  $stmt = $con->prepare("SELECT email FROM signupuser WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
 $result = $stmt->get_result();

 if($result->num_rows>0)
 {
    $row = $result->fetch_assoc();
    $storemail = $row['email'];
    if($email === $storemail)
    {
        echo json_encode(array('response' => 'your email exists'));
    }
    else {
        // Authentication failed
        echo json_encode(array('response' => 'your email doesnt exists'));
      }
 }
 else {
    // Authentication failed
    echo json_encode(array('response' => 'not exists'));
  }
  
  $stmt->close();
  $con->close();
?>