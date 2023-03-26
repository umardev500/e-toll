<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TimeController;
use App\Http\Controllers\WebhookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/orders', [OrderController::class, 'create']);
Route::get('/orders/{id}', [OrderController::class, 'findOne']);
Route::get('/orders', [OrderController::class, 'find']);
Route::get('/orders/{id}/cancel', [OrderController::class, 'cancel']);
Route::get('/orders/{id}/done', [OrderController::class, 'markDone']);

// Product routes
Route::post('/products', [ProductController::class, 'create']);
Route::get('/products', [ProductController::class, 'find']);
Route::get('/products/{id}', [ProductController::class, 'findOne']);

// Brand
Route::get('/brands', [BrandController::class, 'find']);
Route::post('/brands', [BrandController::class, 'create']);
Route::put('/brands/{id}', [BrandController::class, 'update']);
Route::put('/brands/{id}/status', [BrandController::class, 'statusUpdate']);

// Webhook
Route::post('/status', [WebhookController::class, 'setStatus']);

// Time
Route::get('/server-time', [TimeController::class, 'get']);
