<?php
        
        require "lib/PHPMailerAutoload.php";
        
        $poll = $_POST['param'];
        
		$answer = $_POST['answer'];
		
		$msg = $_POST['msg'];

		$message .= "
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Вопрос</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$poll</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Ответ</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$answer</td>
			</tr>
            <tr style='background-color: #f8f8f8;'>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$msg</td>
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

        $mail -> SetFrom('dabomjj@yandex.ru','Опросник Romanova Natalia');

        $mail -> Subject = "Опросник Romanova Natalia";

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


