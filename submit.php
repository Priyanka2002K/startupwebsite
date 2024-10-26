<?php
require_once 'config.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];

$sql = "INSERT INTO users (fname, lname, email) VALUES ('$fname', '$lname', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>