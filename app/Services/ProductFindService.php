<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductFindService
{
    public static function findOne($id)
    {
        $product = Product::find($id);
        return $product;
    }

    public static function find(Request $req)
    {
        $perPage = $req->input('per_page', '10');
        $perPage = intval($perPage);
        $product = Product::with('brand')
            ->simplePaginate(perPage: $perPage);
        return $product;
    }
}
