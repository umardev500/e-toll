<?php

namespace App\Repositories;

use App\Models\Product;

class ProductDeleteRepository
{
    public static function delete($id)
    {
        return Product::destroy($id);
    }
}
