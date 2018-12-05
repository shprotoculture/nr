<?php
        
        require "lib/PHPMailerAutoload.php";
        
        $poll = $_POST['param'];
        
		$products = $_POST['products'];
		
        $name = $_POST['name'];
        
        $phone = $_POST['phone'];

        $email = $_POST['email'];

		$message .= "
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Значение</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$poll</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Заказ</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$products</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$name</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$phone</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>E-mail</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$email</td>
			</tr>
			";

		$message = "<table style='width: 100%;'>$message</table>";

        $mail = new PHPMailer;

        $mail-> IsSMTP();

        $mail -> Host = "smtp.yandex.ru";

        $mail -> SMTPAuth = true;

        $mail -> SMTPSecure = "ssl";

        $mail -> Port = 465;

        $mail -> CharSet = 'UTF-8';

        $mail -> Username = 'dabomjj@yandex.ru';

        $mail -> Password = 'rexthcrbq';

        $mail -> SetFrom('dabomjj@yandex.ru','Romonova Charger');

        $mail -> Subject = "Romanova Charger";

        $mail -> Body = $message;

        $mail -> AltBody = "Это тест письма";

        $address = $_POST['email'];

        $mail -> AddAddress('web@romanovanatalia.com', "qwerty");

        $mail -> isHTML(true);

        if($mail->Send()){
            echo 'Отправлено';
        }else{
            echo 'Не отправлено ' . $mail -> ErrorInfo;
        }


