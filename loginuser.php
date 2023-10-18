<?php
include('connection.php');

$email = $_GET['email'] ?? "";
$password = $_GET['password'] ?? "";
if ($con->connect_error) {
  die("Connection failed: " . $con->connect_error);
}

// Use a prepared statement to avoid SQL injection
$stmt = $con->prepare("SELECT email, password FROM signupuser WHERE email = ?");
$stmt->bind_param("s", $email); // Bind the email parameter
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $storedPassword = $row['password'];

  // You should verify the password here. For simplicity, we're just checking if the stored password matches the provided password.
  if ($password === $storedPassword) {
    // Authentication successful
    echo json_encode(array('response' => 'successful authentication'));
  } else {
    // Authentication failed
    echo json_encode(array('response' => 'not successful authentication'));
  }
} else {
  // Authentication failed
  echo json_encode(array('response' => 'not successful authentication'));
}

$stmt->close();
$con->close();
?>
