<?php

namespace App\Services;

use App\Repositories\ProductDeleteRepository;

class ProductDeleteService
{
    public static function delete($id)
    {
        return ProductDeleteRepository::delete($id);
    }
}
