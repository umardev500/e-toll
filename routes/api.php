<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
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

// Product routes
Route::post('/products', [ProductController::class, 'create']);
Route::get('/products', [ProductController::class, 'find']);
Route::get('/products/{id}', [ProductController::class, 'findOne']);

// Brand
Route::get('/brands', [BrandController::class, 'find']);
