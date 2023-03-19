<?php

namespace App\Repositories;

use App\Models\Product;
use Carbon\Carbon;

class ProductCreateRepository
{
    public static function create($title, $price, $brandId)
    {
        $product = new Product();
        $product->title = $title;
        $product->price = $price;
        $product->brand_id = $brandId;
        $product->created_at = Carbon::now()->timestamp;
        $product->save();
    }
}
