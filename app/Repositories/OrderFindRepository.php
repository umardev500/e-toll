<?php

namespace App\Repositories;

use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class OrderFindRepository
{
    public static function find($perPage, $phoneNumber, $sort, $status, $search)
    {
        $query = Order::with('productCopy.brand');
        if (!empty($phoneNumber)) {
            $query->where('orders.phone_number', $phoneNumber);
        }
        if (!empty($status) && $status == 'pending') {
            $query->where('status', 'pending');
            $query->where('expired_at', '>', Carbon::now()->timestamp);
        } elseif (!empty($status) && $status != 'none') {
            $query->where('status', $status);
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
        $orders =  $query->paginate(perPage: $perPage);

        return $orders;
    }

    public static function findOne($id)
    {
        return Order::with('productCopy.brand')->find($id);
    }
}
