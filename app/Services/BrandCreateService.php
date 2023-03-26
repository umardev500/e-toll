<?php

namespace App\Services;

use App\Repositories\BrandCreateRepository;
use Illuminate\Support\Facades\Log;

class BrandCreateService
{
    public static function create($data)
    {
        $brand = $data['brand'];
        $prefix = $data['prefix'];

        BrandCreateRepository::create(brand: $brand, prefix: $prefix);
    }
}
