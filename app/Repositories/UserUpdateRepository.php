<?php

namespace App\Repositories;

use App\Models\User;

class UserUpdateRepository
{
    public static function update($data)
    {
        return User::find(1)->update($data);
    }
}
