<?php

namespace App\Services;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderFindService
{
    public static function find(Request $req)
    {
        $phone_number = $req->input('phone');

        $query = Order::with('productCopy.brand');
        if (!empty($phone_number)) {
            $query->where('orders.phone_number', $phone_number);
        }
        $orders =  $query->get();

        return $orders;
    }
}
