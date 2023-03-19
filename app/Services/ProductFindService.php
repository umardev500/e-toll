<?php

namespace App\Services;

use App\Models\Product;

class ProductFindService
{
    public static function findOne($id)
    {
        $product = Product::find($id);
        return $product;
    }
}
