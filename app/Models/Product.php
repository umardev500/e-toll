<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'brand_id',
        'title',
        'price',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
