<?php

namespace App\Services;

use App\Models\Order;
use App\Repositories\OrderFindRepository;
use Illuminate\Http\Request;

class OrderFindService
{
    public static function find(Request $req)
    {
        $phoneNumber = $req->input('phone');
        $perPage = $req->input('per_page', '1');
        $perPage = intval($perPage);

        return OrderFindRepository::find(perPage: $perPage, phoneNumber: $phoneNumber);
    }

    public static function findOne($id)
    {
        return OrderFindRepository::findOne($id);
    }
}
