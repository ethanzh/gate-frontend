<?php

/**
 *
 * File created for GATE Education.
 *
 * @author William Shiao <willshiao@gmail.com>
 * @copyright  2014-2015 GATE
 * @link https://github.com/sangwookp/gate
 */


set_time_limit ( 0 );
$secret = '12345';


set_error_handler(
    function($severity, $message, $file, $line)
    {
        die("Error Occurred: $message occurred in $file on line $line with severity $severity.");
    }
);

set_exception_handler(
    function($e)
    {
        header('HTTP/1.1 500 Internal Server Error');
        echo "Error on line {$e->getLine()}: " . htmlSpecialChars($e->getMessage());
        die();
    }
);

$rawPost = NULL;

if (!isset($_SERVER['HTTP_X_HUB_SIGNATURE']))
    throw new \Exception("HTTP header 'X-Hub-Signature' is missing.");
elseif (!extension_loaded('hash'))
    throw new \Exception("Missing 'hash' extension to check the secret code validity.");

list($algo, $hash) = explode('=', $_SERVER['HTTP_X_HUB_SIGNATURE'], 2) + array('', '');

if (!in_array($algo, hash_algos(), TRUE))
    throw new \Exception("Hash algorithm '$algo' is not supported.");

$rawPost = file_get_contents('php://input');

//die("Algo: $algo\nSecret: $secret\nHMAC: " . hash_hmac($algo, $rawPost, $secret) . "\nHash: $hash\nPost: $rawPost");

if ($hash !== hash_hmac($algo, $rawPost, $secret))
    throw new \Exception('Hook secret does not match.');

if (!isset($_SERVER['CONTENT_TYPE']))
    throw new \Exception("Missing HTTP 'Content-Type' header.");
elseif (!isset($_SERVER['HTTP_X_GITHUB_EVENT']))
    throw new \Exception("Missing HTTP 'X-Github-Event' header.");


switch ($_SERVER['CONTENT_TYPE'])
{
    case 'application/json':
        $json = $rawPost ?: file_get_contents('php://input');
        break;

    case 'application/x-www-form-urlencoded':
        $json = $_POST['payload'];
        break;

    default:
        throw new \Exception("Unsupported content type: " + $_SERVER['CONTENT_TYPE']);
}

$payload = json_decode($json);

switch (strtolower($_SERVER['HTTP_X_GITHUB_EVENT']))
{
    case 'push':
        die(gitPull());
        break;

    default:
        header('HTTP/1.0 404 Not Found');
        echo "Event:$_SERVER[HTTP_X_GITHUB_EVENT] Payload:\n";
        print_r($payload);
        die();
}

function gitPull()
{
    $cmd ='cd /public_html/ethanzh; git pull git@github.com:ethanzh/EthanKenProject.git master 2>&1;';

    $str = shell_exec($cmd);

    if(strpos($str, 'error') !== false)
        throw new Exception("Shell error: \n" . $str);

    return $str;
}