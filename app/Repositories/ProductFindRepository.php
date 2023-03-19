<?php

namespace App\Repositories;

use App\Models\Product;

class ProductFindRepository
{
    public static function findOne($id)
    {
        return Product::with('brand')
            ->where('products.id', $id)
            ->get();
    }

    public static function find($perPage, $prefix)
    {
        $product = Product::with('brand')
            ->whereHas('brand', function ($query) use ($prefix) {
                if ($prefix) {
                    $query->whereJsonContains('prefix', $prefix);
                }
            })
            ->simplePaginate(perPage: $perPage);
        return $product;
    }
}
