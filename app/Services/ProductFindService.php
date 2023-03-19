<?php

namespace App\Services;

use App\Models\Product;
use App\Repositories\ProductFindRepository;
use Illuminate\Http\Request;

class ProductFindService
{
    public static function findOne($id)
    {
        return ProductFindRepository::findOne($id);
    }

    public static function find(Request $req)
    {
        $perPage = $req->input('per_page', '10');
        $perPage = intval($perPage);
        return ProductFindRepository::find($perPage);
    }
}
