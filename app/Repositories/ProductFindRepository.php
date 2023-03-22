<?php

namespace App\Repositories;

use App\Models\Product;

class ProductFindRepository
{
    public static function findOne($id)
    {
        return Product::with('brand')
            ->where('products.id', $id)
            ->first();
    }

    public static function find($perPage, $prefix, $brandId)
    {
        $product = Product::with('brand')
            ->whereHas('brand', function ($query) use ($prefix, $brandId) {
                if ($prefix) {
                    $query->whereJsonContains('prefix', $prefix);
                }

                if ($brandId) {
                    $query->where('id', $brandId);
                }
            })
            ->simplePaginate(perPage: $perPage);
        return $product;
    }
}
