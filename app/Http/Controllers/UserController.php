<?php

namespace App\Http\Controllers;

use App\Services\UserUpdateService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $req)
    {
        $data = $req->json()->all();
        return UserUpdateService::update($data);
    }
}
