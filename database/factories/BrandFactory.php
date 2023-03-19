<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Log;
use Symfony\Component\VarDumper\VarDumper;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Brand>
 */
class BrandFactory extends Factory
{
    protected $model = Brand::class;

    public function definition(): array
    {
        $prefix = [];
        for ($i = 0; $i < 5; $i++) {
            $prefix[] = fake()->numberBetween(1000, 9999);
        }

        $prefixEncoded = json_encode($prefix);

        return [
            'name' => fake()->company(),
            'prefix' => $prefix,
            'created_at' => fake()->unixTime(),
        ];
    }
}
