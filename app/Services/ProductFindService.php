<?php

namespace App\Services;

use App\Models\Product;
use App\Repositories\ProductFindRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductFindService
{
    public static function findOne($id)
    {
        return ProductFindRepository::findOne($id);
    }

    public static function find(Request $req)
    {
        $perPage = $req->input('per_page', '10');
        $brandId = $req->input('brand_id');
        $perPage = intval($perPage);
        $prefix = $req->input('prefix');
        $sort = $req->input('sort', 'asc');
        $search = $req->input('search');

        return ProductFindRepository::find(perPage: $perPage, prefix: $prefix, brandId: $brandId, sort: $sort, search: $search);
    }
}
