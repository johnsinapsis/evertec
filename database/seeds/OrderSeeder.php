<?php

use App\Order;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::truncate();
        Order::create([
            'user_id' => 2,
            'status' => 'CREATED',
            'url' => 'https://test.placetopay.com/redirection/session/446835/741a2fa8cb3e01e689782603e71b218e'
        ]);
        Order::create([
            'user_id' => 2,
            'status' => 'PAYED',
            'url' => null
        ]);
        Order::create([
            'user_id' => 2,
            'status' => 'REJECTED',
            'url' => 'https://test.placetopay.com/redirection/session/446835/741a2fa8cb3e01e689782603e71b218e'
        ]);
    }
}
