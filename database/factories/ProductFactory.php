<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'toll' => fake()->numberBetween(1000, 8888),
            'price' => fake()->numberBetween(1000, 9999),
            'created_at' => fake()->unixTime()
        ];
    }
}
