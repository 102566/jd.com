<?php
    include('./connect1.php');
    $id = $_GET['id'];
    $username = $_GET['username'];
    $sql = "select * from studytarget where user_name = '$username'";
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        echo '{"status":200,"msg":"用户名已存在","has":true,"username":"'.$username.'"}';
    }else{
        echo '{"status":200,"msg":"用户名可以使用","has":false,"username":"'.$username.'"}';
    }
    $mysqli->close();
?>