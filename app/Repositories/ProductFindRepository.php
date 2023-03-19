<?php

namespace App\Repositories;

use App\Models\Product;

class ProductFindRepository
{
    public static function findOne($id)
    {
        return Product::with('brand')->where('products.id', $id)->get();
    }

    public static function find($perPage)
    {
        $product = Product::with('brand')
            ->simplePaginate(perPage: $perPage);
        return $product;
    }
}
