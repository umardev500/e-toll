<?php

namespace App\Http\Controllers;

use App\Services\BrandCreateService;
use App\Services\BrandFindService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class BrandController extends Controller
{
    public function find(Request $req)
    {
        return BrandFindService::find($req);
    }

    public function create(Request $req)
    {
        $data = $req->json()->all();
        return BrandCreateService::create($data);
    }
}
