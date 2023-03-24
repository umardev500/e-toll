<?php

namespace App\Repositories;

use App\Models\Order;
use Illuminate\Support\Facades\Log;

class OrderFindRepository
{
    public static function find($perPage, $phoneNumber, $sort, $search)
    {
        $query = Order::with('productCopy.brand');
        if (!empty($phoneNumber)) {
            $query->where('orders.phone_number', $phoneNumber);
        }

        if (!empty($search)) {
            $query->orWhere('orders.order_id', 'LIKE', '%' . $search . '%')
                ->orWhere('orders.phone_number', 'LIKE', '%' . $search . '%')
                ->orWhere('orders.va', 'LIKE', '%' . $search . '%')
                ->orWhereHas('productCopy', function ($q) use ($search) {
                    $q->whereHas('brand', function ($q) use ($search) {
                        $q->where('name', 'LIKE', '%' . $search . '%');
                    });
                });
        }

        $query = $query->orderBy('created_at', $sort);
        $orders =  $query->simplePaginate(perPage: $perPage);

        return $orders;
    }

    public static function findOne($id)
    {
        return Order::with('productCopy.brand')->find($id);
    }
}
