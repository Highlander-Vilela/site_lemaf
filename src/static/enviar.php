<?php
/* email que dispara a mensagem */
$emailsender='secretaria@lemaf.ufla.br';

/* Verifica qual é o sistema operacional do servidor para ajustar o cabeçalho de forma correta.  */
if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n"; //Se for Windows
else $quebra_linha = "\n"; //Se "não for Windows"

// Passando os dados obtidos pelo formulário para as variáveis abaixo
$nomeremetente     = $_POST['nome'];
$emailremetente    = $_POST['email'];
$assunto           = $_POST['assunto'];
$emaildestinatario = 'secretaria@lemaf.ufla.br';
$mensagemHTML      = 'De: '.$nomeremetente.'<br/> E-mail: '.$emailremetente.'<br/><br/> Mensagem: '.$_POST['mensagem'];

/* Montando o cabeçalho da mensagem */

$headers = "MIME-Version: 1.1" .$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;

$headers .= "From: " . $emailsender . $quebra_linha;
$headers .= "Reply-To: " . $emailremetente . $quebra_linha;

/* Enviando a mensagem */

if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){
  $headers .= "Return-Path: " . $emailsender . $quebra_linha;
  mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
}

/* Fim do envio de email*/
?>
