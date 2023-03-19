<?php

namespace App\Services;

use App\Repositories\ProductCreateRepository;

class ProductCreateService
{
    public static function create($requestData)
    {
        $title = $requestData['title'];
        $price = $requestData['price'];
        $brandId = $requestData['brand_id'];

        ProductCreateRepository::create($title, $price, $brandId);

        return $requestData;
    }
}
