<?php
require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$mail = new App\Services\MailService();
try {
    $res = $mail->send("abhisheksxna.15@gmail.com", "Railway Script Test", "<p>Hello from railway</p>");
    echo "SUCCESS: " . ($res ? 'true' : 'false') . "\n";
} catch (\Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
