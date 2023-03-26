<?php

namespace App\Repositories;

use App\Models\Brand;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class BrandCreateRepository
{
    public static function create($brand, $prefix)
    {
        Log::info($prefix);
        $now = Carbon::now()->timestamp;
        $brand = new Brand();
        $brand->brand_id = '122';
        $brand->name = '122';
        $brand->prefix = $prefix;
        $brand->created_at = $now;
        $brand->save();
    }
}
