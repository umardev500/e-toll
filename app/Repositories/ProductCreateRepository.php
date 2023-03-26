<?php

namespace App\Repositories;

use App\Models\Product;
use Carbon\Carbon;

class ProductCreateRepository
{
    public static function create($credit, $price, $stock, $brandId)
    {
        $now = Carbon::now()->timestamp;

        $product = new Product();
        $product->brand_id = $brandId;
        $product->product_id = $now;
        $product->credit = $credit;
        $product->price = $price;
        $product->stock = $stock;
        $product->created_at = $now;
        $product->save();
    }
}
