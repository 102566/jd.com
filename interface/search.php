<?php
    include ('./connect.php');
    $data = $_REQUEST['inf'];
    $sql = "select * from shop where title Like '$data%'";
    $result = $mysqli->query($sql);
    $arr = array();
    if($result->num_rows>0){
        while($now = $result->fetch_assoc()){
            array_push($arr,$now);
        }
        $json = json_encode($arr);
        echo $json;
    }else{
        echo '{"data":"没有数据"}';
    }
    $mysqli->close();
?>