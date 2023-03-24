<?php

namespace App\Services;

use App\Models\Order;
use App\Repositories\OrderFindRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderFindService
{
    public static function find(Request $req)
    {
        $phoneNumber = $req->input('phone');
        $perPage = $req->input('per_page', '10');
        $search = $req->query('search');
        $perPage = intval($perPage);

        return OrderFindRepository::find(perPage: $perPage, phoneNumber: $phoneNumber, search: $search);
    }

    public static function findOne($id)
    {
        return OrderFindRepository::findOne($id);
    }
}
