<?php
    include ('./connect.php');

    $id = $_REQUEST['id'];

    $sql = "select * from shop where id = '${id}'";

    $result = $mysqli->query($sql);

    $res = $result->fetch_assoc();

    $json = json_encode($res);

    echo $json;

    $mysqli->close();
?>