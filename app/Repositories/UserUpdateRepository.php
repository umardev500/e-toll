<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserUpdateRepository
{
    public static function update($data)
    {
        $id = Auth::user()->id;
        return User::find($id)->update($data);
    }
}
