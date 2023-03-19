<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderFindService
{
    public static function find(Request $req)
    {
        $phoneNumber = $req->input('phone');
        $perPage = $req->input('per_page', '1');
        $perPage = intval($perPage);

        $query = Order::with('productCopy.brand');
        if (!empty($phoneNumber)) {
            $query->where('orders.phone_number', $phoneNumber);
        }
        $orders =  $query->simplePaginate(perPage: $perPage);

        return $orders;
    }
}
