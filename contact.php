<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "product_db";
require('connection.php');

// Create a connection
$con = new mysqli($host, $user, $password, $db);

// Initialize response data
$response = array();

// Check if the required parameters are set in the request
if (
    isset($_GET['name'], $_GET['email'], $_GET['phone'], $_GET['address'], $_GET['message'])
) {
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    $message = $_GET['message'];

    // Sanitize the input (assuming you want to sanitize)
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $phone = filter_var($phone, FILTER_SANITIZE_STRING);
    $address = filter_var($address, FILTER_SANITIZE_STRING);
    $message = filter_var($message, FILTER_SANITIZE_STRING);

    // Build the SQL query (Note: Use prepared statements for security)
    $sql = "INSERT INTO contactus (name, email, phone, address, message) VALUES ('$name', '$email', '$phone', '$address', '$message')";

    // Perform the database insertion (Note: Use prepared statements for security)
    if ($con->query($sql) === TRUE) {
        $response['status'] = 'success';
        $response['message'] = 'Enquiry submitted successfully!';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Error: ' . $sql . "<br>" . $con->error;
    }

    // Close the database connection
    $con->close();
} else {
    // Handle invalid requests
    $response['status'] = 'error';
    $response['message'] = 'Invalid request parameters';
    http_response_code(400); // Bad Request
}

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
