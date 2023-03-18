<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Services\CreateOrderService;
use App\Services\OrderFindOneService;
use App\Services\OrderFindService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    public function create(Request $req)
    {
        $requestData = $req->json()->all();

        $orderService = new CreateOrderService();
        $response = $orderService->create($requestData);

        return $response;
    }

    public function findOne($id)
    {
        return OrderFindOneService::findOne($id);
    }

    public function find(Request $req)
    {
        return OrderFindService::find($req);
    }
}
