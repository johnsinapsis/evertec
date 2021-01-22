<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create(['name' => 'john jairo gonzález', 
        			  'email' => 'johnsinapsis@gmail.com', 
        			  'role' => 1, 
                      'password' => Hash::make('12345678')]);
        User::create(['name' => 'Ricardo Perez', 
        			  'email' => 'ricardo.perez@gmail.com', 
        			  'phone' => '3134876547', 
        			  'role' => 2, 
        			  'password' => Hash::make('12345678')]);
    }
}
