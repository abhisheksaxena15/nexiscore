<?php

namespace App\Helpers;

use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;
use Exception;

class UploadHelper
{
    public static function uploadProductImage(array $file): string
    {
        if (
            !isset($file['tmp_name']) ||
            !is_uploaded_file($file['tmp_name'])
        ) {
            throw new Exception('Invalid image upload.');
        }

        $cloudName = getenv('CLOUDINARY_CLOUD_NAME');
        $apiKey = getenv('CLOUDINARY_API_KEY');
        $apiSecret = getenv('CLOUDINARY_API_SECRET');

        if (!$cloudName || !$apiKey || !$apiSecret) {
            throw new Exception('Cloudinary environment variables are missing.');
        }

        Configuration::instance([
            'cloud' => [
                'cloud_name' => $cloudName,
                'api_key' => $apiKey,
                'api_secret' => $apiSecret,
            ],
            'url' => [
                'secure' => true,
            ],
        ]);

        $upload = new UploadApi();

        $result = $upload->upload(
            $file['tmp_name'],
            [
                'folder' => 'allstag/products',
                'resource_type' => 'image',
            ]
        );

        if (empty($result['secure_url'])) {
            throw new Exception('Cloudinary upload failed.');
        }

        return $result['secure_url'];
    }


    public static function uploadBrandLogo(array $file): string
    {
        $directory = __DIR__ . '/../../public/uploads/brands/';

        if (!is_dir($directory)) {
            mkdir($directory, 0777, true);
        }

        $extension = pathinfo(
            $file['name'],
            PATHINFO_EXTENSION
        );

        $filename = uniqid('brand_') . '.' . $extension;

        move_uploaded_file(
            $file['tmp_name'],
            $directory . $filename
        );

        return 'uploads/brands/' . $filename;
    }


    public static function uploadCategoryImage(array $file): string
    {
        $directory = __DIR__ . '/../../public/uploads/categories/';

        if (!is_dir($directory)) {
            mkdir($directory, 0777, true);
        }

        $extension = pathinfo(
            $file['name'],
            PATHINFO_EXTENSION
        );

        $filename = uniqid('category_') . '.' . $extension;

        move_uploaded_file(
            $file['tmp_name'],
            $directory . $filename
        );

        return 'uploads/categories/' . $filename;
    }
}