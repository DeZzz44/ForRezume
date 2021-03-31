<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message=$_POST['message'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
$name = urldecode($name);
$email = urldecode($email);
$message = urldecode($message);
$name = trim($name);
$email = trim($email);
$message = trim($message);

if (mail("93galaev_a@mail.ru", "Заявка с сайта", "Имя:".$name.". E-mail: ".$email." Сообщение: ".$message ,"From: info@satename.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>