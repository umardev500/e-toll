<?php

namespace App\Repositories;

use App\Models\Product;
use Illuminate\Support\Facades\Log;

class ProductFindRepository
{
    public static function findOne($id)
    {
        return Product::with('brand')
            ->where('products.id', $id)
            ->first();
    }

    public static function find($perPage, $prefix, $brandId, $sort, $status, $search)
    {
        $query = Product::with('brand');

        $query->whereHas('brand', function ($q) use ($prefix, $brandId) {
            if ($prefix) {
                $q->whereJsonContains('prefix', $prefix);
            }

            if ($brandId) {
                $q->where('id', $brandId);
            }
        });

        if (!empty($status) && $status == 'sold') {
            $query->where('status', $status);
            $query->where('stock', '<=', 0);
        } elseif (!empty($status) && $status != 'none') {
            $query->where('status', $status);
        }

        if (!empty($search)) {
            $query->where('product_id', 'LIKE', '%' . $search . '%')
                ->orWhere('status', 'LIKE', '%' . $search . '%')
                ->orWhereHas('brand', function ($q) use ($search, $prefix, $brandId) {
                    $q->where('name', 'LIKE', '%' . $search . '%');
                    if ($prefix) {
                        $q->whereJsonContains('prefix', $prefix);
                    }
                    if ($brandId) {
                        $q->where('id', $brandId);
                    }
                });
        }

        $query = $query->orderBy('created_at', $sort);
        $products = $query->paginate(perPage: $perPage);
        return $products;
    }
}
