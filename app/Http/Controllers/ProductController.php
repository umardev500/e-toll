<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\ProductFindService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function findOne($id)
    {
        return ProductFindService::findOne($id);
    }

    public function find(Request $req)
    {
        return ProductFindService::find($req);
    }
}
