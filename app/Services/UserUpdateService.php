<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserUpdateRepository;

class UserUpdateService
{
    public static function update($data)
    {
        UserUpdateRepository::update($data);
    }
}
