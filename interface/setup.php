<?php
    include('./connect1.php');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];
    $sex = $_REQUEST['sex'];
    // $mysqli->open();
    $sql = "select * from studytarget where user_name ='$username'";
    $result = $mysqli->query($sql);
    // var_dump($result);
    // var_dump($result);
    // var_dump($result->num_rows);
    if($result->num_rows>0){
        echo'<script>alert("用户名已存在");</script>';
        echo'<script>location.href="../src/html/setup.html";</script>';
        $mysqil->close();
        die;
    }
    $insertUser = "INSERT INTO studytarget(user_name,user_password,user_phone,user_sex) VALUES ('$username','$password','$phone','$sex')";
    $res = $mysqli->query($insertUser);
    // echo $res;
    $mysqli->close();
    if($res){
        echo '{"status":200,"msg":"用户注册成功","has":true,"username":"'.$username.'"}';
    }else{
        echo '{"status":200,"msg":"用户注册失败","has":false,"username":"'.$username.'"}';
    }
?>