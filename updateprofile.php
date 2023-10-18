<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "product_db";
require('connection.php');

// Create connection
$con = new mysqli($host, $user, $password, $db);

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve user data from the request body
    $postData = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize user data as needed

    // Extract user data from the request
    $name = $postData['name'];
    $email = $postData['email'];
    $phonenumber = $postData['phonenumber'];
    $address = $postData['address'];

    // Perform the profile update in the database
    // Assuming 'phonenumber' uniquely identifies the user in the 'signupuser' table
    $sql = "UPDATE signupuser SET name='$name', email='$email', address='$address' WHERE phonenumber='$phonenumber'";

    if (mysqli_query($con, $sql)) {
        // Profile update was successful
        $response = ['success' => true];
        echo json_encode($response);
    } else {
        // Profile update failed
        $response = ['success' => false];
        echo json_encode($response);
    }
} else {
    // Respond with an error message if the request method is not POST
    $response = ['success' => false, 'message' => 'Invalid request method'];
    echo json_encode($response);
}

mysqli_close($con);
?>
