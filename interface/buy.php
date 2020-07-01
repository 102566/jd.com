<?php
    include ('./connect.php');
    $list = $_REQUEST['idlist'];
    $sql = "select * from shop where id in ($list)";
    $result = $mysqli->query($sql);
    $arr = array();
    while($row = $result->fetch_assoc()){
        array_push($arr,$row);
    };
    $json = json_encode($arr);
    echo $json;
    $mysqli->close();
?>