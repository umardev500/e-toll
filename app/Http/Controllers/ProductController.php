<?php

namespace App\Http\Controllers;

use App\Services\ProductCreateService;
use App\Services\ProductFindService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function findOne($id)
    {
        return ProductFindService::findOne($id);
    }

    public function find(Request $req)
    {
        return ProductFindService::find($req);
    }

    public function create(Request $req)
    {
        $requestData = $req->json()->all();

        return ProductCreateService::create($requestData);
    }

    public function update($id, Request $req)
    {
        $requestData = $req->json()->all();
        return ProductCreateService::update($id, $requestData);
    }

    public function statusUpdate($id, Request $req)
    {
        $requestData = $req->json()->all();
        return ProductCreateService::statusUpdate($id, $requestData);
    }
}
