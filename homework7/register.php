<?php header("Content-type:text/html;charset=utf-8");
$username = $_POST["username"];
$password = $_POST["password"]; 
    try {
        $config = require_once './config.php';
        $pdo = new PDO($config['dsn'], $config['user'], $config['password']);
        $sql = "insert into abc(username,password) values ('{$username}','{$password}')";
        $reg = $pdo->query($sql);
        if ($reg) {
            echo "<script>
                window.location.href='./loginpage.html';   
            </script>";
        }
        else{
            echo "error";
        }
    }
    catch (PDOException $e) {
        echo $e->getMessage();
    }