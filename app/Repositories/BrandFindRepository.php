<?php

namespace App\Repositories;

use App\Models\Brand;
use Illuminate\Support\Facades\Log;

class BrandFindRepository
{
    public static function find($perPage, $sort, $status, $search)
    {
        $query = Brand::query();
        if (!empty($status) && $status != 'none') {
            $query->where('status', $status);
        }

        if (!empty($search)) {
            $query->where('name', 'LIKE', '%' . $search . '%')
                ->orWhere('brand_id', 'LIKE', '%' . $search . '%')
                ->orWhere('status', 'LIKE', '%' . $search . '%')
                ->orWhereJsonContains('prefix', $search);
        }

        $query = $query->orderBy('created_at', $sort);
        $brands = $query->paginate($perPage);
        return $brands;
    }
}
