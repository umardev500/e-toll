<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Services\CreateOrderService;
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
        $order = Order::with('productCopy')->find($id);
        return $order;
    }
}
