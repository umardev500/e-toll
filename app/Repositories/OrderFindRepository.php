<?php

namespace App\Repositories;

use App\Models\Order;

class OrderFindRepository
{
    public static function find($perPage, $phoneNumber)
    {
        $query = Order::with('productCopy.brand');
        if (!empty($phoneNumber)) {
            $query->where('orders.phone_number', $phoneNumber);
        }
        $orders =  $query->simplePaginate(perPage: $perPage);

        return $orders;
    }

    public static function findOne($id)
    {
        return Order::with('productCopy.brand')->find($id);
    }
}
