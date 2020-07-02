<?php
    include('./connect1.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $sql = "select * from studytarget where user_name ='$username' and user_password = '$password'";
    $result = $mysqli->query($sql);
    if($result->num_rows>0){
        setcookie('username',$username,time()+3600*24,'/');
        setcookie('login','true',time()+3600*24,'/');
        echo '{"status":200,"msg":"登陆成功","has":true,"username":"'.$username.'"}';
    }else{
        echo '{"status":200,"msg":"登陆失败","has":false,"username":"'.$username.'"}';
    }
?>