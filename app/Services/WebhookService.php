<?php

namespace App\Services;

use App\Repositories\WebhookRepositoy;
use App\Repositories\WhRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class WebhookService
{
    public static function setStatus(array $requestData)
    {
        $status = $requestData['transaction_status'];
        $settlementTimeUnix = null;
        if ($status == 'settlement') {
            $settlementTime = $requestData['settlement_time'];
            $settlementTimeUnix = Carbon::createFromFormat('Y-m-d H:i:s', $settlementTime, 'Asia/Jakarta')->timestamp;
        }
        $orderId = $requestData['order_id'];

        return WhRepository::setStatus($orderId, $status, $settlementTimeUnix);
    }
}
