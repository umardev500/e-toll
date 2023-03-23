<?php

namespace App\Services;

use App\Repositories\WebhookRepositoy;
use App\Repositories\WhRepository;
use Carbon\Carbon;

class WebhookService
{
    public static function setStatus(array $requestData)
    {
        $settlementTime = $requestData['settlement_time'];
        $settlementTimeUnix = Carbon::createFromFormat('Y-m-d H:i:s', $settlementTime, 'Asia/Jakarta')->timestamp;
        $orderId = $requestData['order_id'];
        $status = $requestData['transaction_status'];

        return WhRepository::setStatus($orderId, $status, $settlementTimeUnix);
    }
}
