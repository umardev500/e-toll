<?php

namespace App\Services;

use App\Models\Brand;
use App\Repositories\BrandFindRepository;

class BrandFindService
{
    public static function find()
    {
        return BrandFindRepository::find();
    }
}
