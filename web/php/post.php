<?php
include __DIR__.'../../../vendor/autoload.php';
use Tigo\ChatterBot\Response;
use Tigo\ChatterBot\Bot\BotUniversal;

$response  = new Response(new BotUniversal);
echo $response->check($_POST['msg']);

