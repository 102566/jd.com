<?php
    //登录后台需要的主机名，用户名，密码，以及查询的数据库表格
    header('content-type:text/html;charset=utf-8');
    $mysql_myLogin = array(
        'host'=>'localhost:3306',
        'sql_username' => 'root',
        'sql_userpassword'=>'chq1024',
        'table_name' => 'study'
    );

    $mysqli = new mysqli($mysql_myLogin['host'],$mysql_myLogin['sql_username'],$mysql_myLogin['sql_userpassword']);
    if($mysqli->connect_errno){
        die('连接失败'.$mysqli -> connect_errno) ;
    }
    $mysqli->query('set names utf8');

    //进入数据库
    $mydata = $mysqli->select_db($mysql_myLogin['table_name']);
    if(!$mydata){
        die('连接数据库错误'.$mysqli->error);
    }
    $sql = "select * from studytarget"; //将查询语句赋值给$sql变量 '这里的studytarget' 是表格名字;
    $result = $mysqli->query($sql);

    $arr = array();
    while($result_one = $result->fetch_assoc()){
        Array_push($arr,$result_one);
    }

    $json = json_encode($arr);



?>