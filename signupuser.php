<?php
$host = "localhost";
$user = "root";
$password =  "";
$db = "product_db";
require('connection.php');

// Create connection
$con = new mysqli($host, $user, $password, $db);

// Check if the request parameters are set
if(isset($_REQUEST['email']) && isset($_REQUEST['password']) && isset($_REQUEST['confirmpassword']) && isset($_REQUEST['phonenumber'])) {
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $confirmpassword = $_REQUEST['confirmpassword'];
    $phonenumber = $_REQUEST['phonenumber'];

    if ($password === $confirmpassword) { // Check if password and confirm password match
        if($con) {
            $sql = "select * from signupuser where phonenumber='$phonenumber'";
            $result = mysqli_query($con, $sql);

            if(mysqli_num_rows($result) > 0) {
                echo json_encode(array('response' => "User with the same phone number already exists"));
            } else {
                $sql = "insert into signupuser (email, password, confirmpassword, phonenumber) values ('$email','$password','$confirmpassword','$phonenumber')";
                if(mysqli_query($con, $sql)) {
                    echo json_encode(array('response' => "Account has been successfully created"));
                } else {
                    echo json_encode(array('response' => "Failed, try again after some time"));
                }
            }
        } else {
            $status = "Failed";
            echo json_encode(array('response' => "Failed"));
        }
    } else {
        echo json_encode(array('response' => "Password and confirm password do not match"));
    }
} else {
    echo json_encode(array('response' => "Missing parameters"));
}

mysqli_close($con);
?>