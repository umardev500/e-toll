<?php

namespace App\Services;

use App\Helpers\JsonResult;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Models\Order;
use App\Models\ProductCopy;
use Carbon\Carbon;

class CreateOrderService
{
    public function create($requestData)
    {

        $productId = $requestData['product_id'];
        $payment = $requestData['payment'];

        // Get product data
        $product = new ProductController();
        $item = $product->find($productId);
        if ($item == null) {
            return JsonResult::response(404, "product not found");
        }

        $price = $item->price; // item price

        // charge bank
        $response = PaymentController::bank($price, $payment['type']);
        $statusCode = $response->status_code;
        $statusMessage = $response->status_message;
        $trxTime = $response->transaction_time;

        // check for status code
        if ($statusCode != 201) {
            return JsonResult::response($statusCode, $statusMessage);
        }

        $orderId = $response->order_id;

        // do copy of product
        $lastInsertedProduct = $this->createCopyProduct($item);
        // do insert to order
        $this->createOrder($orderId, $trxTime, $item, $lastInsertedProduct, $requestData);

        return $response;
    }

    /**
     * Creates a new copy of a product.
     *
     * @param object $item An object representing the product to be copied.
     * @return int
     */
    protected function createCopyProduct($item)
    {
        $product = new ProductCopy();
        $product->brand_id = $item->brand_id;
        $product->title = $item->title;
        $product->price = $item->price;
        $product->save();

        return $product->id;
    }

    /**
     * Creates a new order in the system.
     *
     * @param string $orderId The ID of the order being created.
     * @param string $trxTime The time of the transaction when the order was placed.
     * @param object $product An object representing the product being ordered.
     * @param int $lastInsertedProduct An object representing the last product that was inserted into the database.
     * @param array $requestData An array of additional data or metadata related to the order.
     * @return void
     */
    protected function createOrder($orderId, $trxTime, $product, $lastInsertedProduct, $requestData)
    {
        $phone = $requestData['phone_number'];
        $trxTime = Carbon::createFromFormat('Y-m-d H:i:s', $trxTime, 'Asia/Jakarta')->timestamp;

        $order = new Order();
        $order->order_id = $orderId;
        $order->product_copy_id = $lastInsertedProduct;
        $order->phone_number = $phone;
        $order->created_at = $trxTime;
        $order->save();
    }
}
