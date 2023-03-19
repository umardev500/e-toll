<?php

namespace App\Http\Controllers;

use App\Services\BrandFindService;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function find()
    {
        return BrandFindService::find();
    }
}
