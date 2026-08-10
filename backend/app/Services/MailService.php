<?php

namespace App\Services;

class MailService
{
    private string $apiKey;
    private string $from;
    private string $fromName;
    private bool $isMuted = false;

    public function __construct()
    {
        $env = function($k) {
            return getenv($k) !== false ? getenv($k) : ($_ENV[$k] ?? '');
        };

        $this->apiKey = $env('RESEND_API_KEY');

        if (empty($this->apiKey)) {
            $this->isMuted = true;
            return;
        }

        $this->from = $env('MAIL_FROM') ?: 'onboarding@resend.dev';
        $this->fromName = $env('MAIL_FROM_NAME') ?: 'Nexiscore';
    }

    /**
     * Generic Email Sender — uses Resend HTTP API (no SMTP needed)
     */
    public function send(
        string $to,
        string $subject,
        string $body
    ): bool {

        if ($this->isMuted) {
            throw new \Exception("MailService is muted. Missing RESEND_API_KEY environment variable.");
        }

        $payload = json_encode([
            'from' => "{$this->fromName} <{$this->from}>",
            'to'   => [$to],
            'subject' => $subject,
            'html' => $body,
        ]);

        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL            => 'https://api.resend.com/emails',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_HTTPHEADER     => [
                'Authorization: Bearer ' . $this->apiKey,
                'Content-Type: application/json',
            ],
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            error_log("Resend curl error: " . $curlError);
            throw new \Exception("Email delivery failed: network error.");
        }

        if ($httpCode >= 400) {
            $decoded = json_decode($response, true);
            $message = $decoded['message'] ?? $response;
            error_log("Resend API error (HTTP $httpCode): " . $message);

            $logDir = __DIR__ . '/../../logs';
            if (!is_dir($logDir)) {
                @mkdir($logDir, 0777, true);
            }
            $logEntry = "[" . date('Y-m-d H:i:s') . "] Resend HTTP $httpCode: $message | TO: $to | SUBJECT: $subject\n---\n";
            @file_put_contents($logDir . '/mail.log', $logEntry, FILE_APPEND);

            throw new \Exception($message);
        }

        return true;
    }

    /**
     * Login OTP
     */
    public function sendOTP(
        string $email,
        string $otp
    ): bool {

        $subject = "Your Login OTP";

        $body = "

        <div style='font-family:Arial;padding:30px'>

            <h2>AllStage Login Verification</h2>

            <p>Your One Time Password is</p>

            <h1
                style='
                    letter-spacing:5px;
                    color:#2563eb;
                    font-size:40px;
                '
            >

            {$otp}

            </h1>

            <p>

            This OTP is valid for only

            <b>5 minutes.</b>

            </p>

            <br>

            <p>

            If you didn't request this,

            ignore this email.

            </p>

        </div>

        ";

        return $this->send(

            $email,

            $subject,

            $body

        );
    }

    /**
     * Forgot Password Email
     */
    public function sendPasswordResetOTP(
        string $email,
        string $otp
    ): bool {

        $subject = "Reset Password OTP";

        $body = "

        <div style='font-family:Arial;padding:30px'>

        <h2>Password Reset</h2>

        <p>

        Use this OTP to reset your password.

        </p>

        <h1
        style='
        color:red;
        letter-spacing:5px;
        '
        >

        {$otp}

        </h1>

        <p>

        Expires in 5 minutes.

        </p>

        </div>

        ";

        return $this->send(
            $email,
            $subject,
            $body
        );
    }

    /**
     * Registration Email
     */
    public function sendVerificationOTP(
        string $email,
        string $otp
    ): bool {

        return $this->sendOTP(
            $email,
            $otp
        );

    }

    /**
     * Order Confirmation
     */
    public function sendOrderConfirmation(
        string $email,
        string $customer,
        string $orderNumber
    ): bool {

        $subject = "Order Confirmation";

        $body = "

        <h2>Hello {$customer}</h2>

        <p>

        Your order has been placed successfully.

        </p>

        <h3>

        Order Number:

        {$orderNumber}

        </h3>

        ";

        return $this->send(
            $email,
            $subject,
            $body
        );

    }

    /**
     * Invoice Email
     */
    public function sendInvoice(
        string $email,
        string $customer,
        string $invoiceNumber
    ): bool {

        $subject = "Invoice";

        $body = "

        <h2>Hello {$customer}</h2>

        <p>

        Your invoice has been generated.

        </p>

        <h3>

        Invoice No:

        {$invoiceNumber}

        </h3>

        ";

        return $this->send(
            $email,
            $subject,
            $body
        );

    }
}