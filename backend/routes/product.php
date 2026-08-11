<?php

use App\Controllers\ProductImageController;
use App\Controllers\ProductController;
use App\Controllers\OrderController;

$router->get(
    '/api/admin/products',
    [ProductController::class, 'index']
);

$router->post(
    '/api/admin/products',
    [ProductController::class, 'store']
);

$router->post(
    '/api/orders',
    [OrderController::class, 'store']
);

$router->post(
    '/api/visit',
    [App\Controllers\DashboardController::class, 'logVisit']
);

$router->post(
    '/api/admin/products/{id}/images',
    [ProductImageController::class, 'upload']
);