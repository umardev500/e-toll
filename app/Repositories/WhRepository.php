<?php

namespace App\Repositories;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class WhRepository
{
    public static function setStatus($orderId, $status, $settlementTime)
    {
        $updatedTime = Carbon::now()->timestamp;
        $payload = ['status' => $status, 'updated_at' => $updatedTime];
        if ($status === 'settlement') {
            $payload['settlement_time'] = $settlementTime;
        }

        $order = Order::where('order_id', $orderId)
            ->update($payload);

        return $order;
    }
}
