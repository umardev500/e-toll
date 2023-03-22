<?php

namespace App\Http\Controllers;

use App\Services\CreateOrderService;
use App\Services\OrderCancelService;
use App\Services\OrderFindService;
use Illuminate\Http\Request;

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
        return OrderFindService::findOne($id);
    }

    public function find(Request $req)
    {
        return OrderFindService::find($req);
    }

    public function cancel($id)
    {
        new OrderCancelService($id);
    }
}
