<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductCopy;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::factory(25)
            ->has(Product::factory())
            ->has(
                ProductCopy::factory()
                    ->has(Order::factory())
            )
            ->create();
    }
}
