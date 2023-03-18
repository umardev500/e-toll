<?php

namespace App\Services;

use App\Models\Order;

class OrderFindOneService
{
    public static function findOne($id)
    {
        return Order::with('productCopy.brand')->find($id);
    }
}
