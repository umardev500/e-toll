<?php

namespace App\Repositories;

use App\Models\Order;

class OrderCreateRepository
{
    public static function create($orderId, $lastInsertedId, $phone, $trxTime)
    {
        $order = new Order();
        $order->order_id = $orderId;
        $order->product_copy_id = $lastInsertedId;
        $order->phone_number = $phone;
        $order->created_at = $trxTime;
        $order->save();
    }
}
