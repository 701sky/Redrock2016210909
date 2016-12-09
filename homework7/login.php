<?php header("Content-type:text/html;charset=utf-8");
session_start();
if (isset($_SESSION['username'])) {
    header('location:./admin.php');
}
if (!empty($_POST)) {
    if (isset($_POST['username']) && $_POST['username'] != '' &&
        isset($_POST['password']) && $_POST['password'] != '') {
        $username = addslashes($_POST['username']);
        $salt = "abc";
        $password = md5(md5($_POST['password']).$salt);
        try {
            $config = require_once './config.php';
            $pdo = new PDO($config['dsn'], $config['user'], $config['password']);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $res = $pdo->query("select * from abc where username='{$username}'");
            $data = $res->fetch(PDO::FETCH_ASSOC);
            if ($password == md5(md5($data['password']).$salt)) {
                $_SESSION['username'] = $username;
                header('location:./admin.php');
            }else {
                echo "<script>alert('登录失败')</script>";
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }else {
        echo "<script>alert('表单未填完整')</script>";
    }
}
?>