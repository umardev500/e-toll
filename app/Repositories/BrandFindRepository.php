<?php

namespace App\Repositories;

use App\Models\Brand;

class BrandFindRepository
{
    public static function find()
    {
        $brands = Brand::paginate();
        return $brands;
    }
}
