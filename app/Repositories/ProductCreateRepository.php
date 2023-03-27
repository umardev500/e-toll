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

    public static function update($id, $credit, $price, $stock, $brandId)
    {
        $now = Carbon::now()->timestamp;

        $product = Product::find($id);
        $product->product_id = $now;
        $product->credit = $credit;
        $product->price = $price;
        $product->stock = $stock;
        $product->updated_at = $now;
        $product->save();
    }

    public static function statusUupdate($id, $status)
    {
        $now = Carbon::now()->timestamp;

        $product = Product::find($id);
        $product->status = $status;
        $product->updated_at = $now;
        $product->save();
    }
}
