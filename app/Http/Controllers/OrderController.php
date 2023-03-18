<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Services\CreateOrderService;
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
        $order = Order::with('productCopy.brand')->find($id);
        return $order;
    }

    public function find()
    {
        $phone_number = request()->input('phone');

        $query = Order::with('productCopy.brand');
        if (!empty($phone_number)) {
            $query->where('orders.phone_number', $phone_number);
        }
        $orders =  $query->get();

        return $orders;
    }
}
