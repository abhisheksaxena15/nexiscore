<?php

namespace App\Services;

use App\Models\ProductImage;
use App\Repositories\ProductImageRepository;

class ProductImageService
{
    private ProductImageRepository $repository;
    private CloudinaryService $cloudinary;

    public function __construct()
    {
        $this->repository = new ProductImageRepository();
        $this->cloudinary = new CloudinaryService();
    }

    public function upload(
        int $productId,
        array $file,
        bool $isPrimary = false
    ): ProductImage {

        if (
            !isset($file['tmp_name']) ||
            $file['error'] !== UPLOAD_ERR_OK
        ) {
            throw new \Exception("Invalid image upload.");
        }

        $imagePath = $this->cloudinary->upload(
            $file['tmp_name']
        );

        $image = new ProductImage();

        $image->setProductId($productId);

        // Store Cloudinary URL
        $image->setImagePath($imagePath);

        $image->setPrimary($isPrimary);

        $image->setSortOrder(0);

        $this->repository->create($image);

        return $image;
    }
}