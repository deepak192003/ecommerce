<?php

require('connection.php');


// Create connection
$con = new mysqli($host, $user, $password, $db);

$email=$_REQUEST['email'];
$password=$_REQUEST['password'];
$confirmpassword=$_REQUEST['confirmpassword'];
$phonenumber=$_REQUEST['phonenumber'];

// date_default_timezone_set("Asia/Calcutta");   //India time (GMT+5:30)
// $time = date('Y/m/d h:i:s');

if($con)
{
    
    $sql = "select * from signupuser where phonenumber='$phonenumber'";
    $result = mysqli_query($con,$sql);

    if(mysqli_num_rows($result)>0)
    {
        echo json_encode(array('response'=>"False"));
    }
    else
    {
        $sql="insert into signupuser (email,password,confirmpassword,phonenumber) values ('$email','$password','$confirmpassword','$phonenumber')";
        if(mysqli_query($con,$sql))
        {
            echo json_encode(array('response'=>"True"));

        }
        else
        {
            echo json_encode(array('response'=>"Failed, try again after sometime"));
        }
        
    }
}
else
{
    $status = "Failed";
    echo json_encode(array('response'=>"Failed"));
}
mysqli_close($con);
?>