<?php

namespace App\Services;

use App\Models\Admin;
use App\Repositories\OtpRepository;

class OtpService
{
    private OtpRepository $repository;

    private MailService $mail;

    public function __construct()
    {
        $this->repository = new OtpRepository();

        $this->mail = new MailService();
    }

    /**
     * Generate 6 Digit OTP
     */
    public function generate(Admin $admin): bool
    {
        $otp = str_pad(
            random_int(0, 999999),
            6,
            '0',
            STR_PAD_LEFT
        );

        $this->repository->deleteByAdmin(
            $admin->getId()
        );

        $this->repository->create(

            $admin->getId(),

            $admin->getEmail(),
            $otp,

            date(
                'Y-m-d H:i:s',
                strtotime('+5 minutes')
            )

        );

        try {
            return $this->mail->sendOTP(
                $admin->getEmail(),
                $otp
            );
        } catch (\Exception $e) {
            if (!empty(\App\Core\Env::get('BYPASS_OTP'))) {
                return true; // Pretend it succeeded since we can use bypass OTP
            }
            throw $e;
        }
    }
}