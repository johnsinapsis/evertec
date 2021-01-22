<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Order;
use App\User;

class OrderTest extends TestCase
{
    public function testCreateOrder(){
        $user = User::where('id',1)->firstOrFail();
        auth()->login($user);
        $response = $this->json('POST','/api/create_order',[
            'user_id' => 1,
            'url' => 'https://test.placetopay.com/redirection/session/446840/741a2fa8cb3e01e689782603e71b218e'
            ]);
        $response->assertStatus(201)
            ->assertJsonStructure([
                'id','user' => [
                    'id','name','email','phone'
                    ],
                    'status','url','created_at','updated_at']);
            $this->assertDatabaseHas('orders',[
                'user_id' => 1,
                'url' => 'https://test.placetopay.com/redirection/session/446840/741a2fa8cb3e01e689782603e71b218e'
            ]);
    }
    
    public function testGetOrder()
    {
        $user = User::where('id',1)->firstOrFail();
        auth()->login($user);
        $response = $this->json('POST','/api/order',['id' => 1]);

        $response->assertStatus(200)
                ->assertJsonStructure([
                    'id','user' => [
                        'id','name','email','phone'
                        ],
                        'status','url','created_at','updated_at']);
        
        
    }

    public function testGetOrdersUser(){
        $user = User::where('id',2)->firstOrFail();
        auth()->login($user);
        $response = $this->json('POST','/api/order_user',['user_id' => $user->id]);
        $structure = [
            ['id',
            'user' => [
                'id','name','email','phone'
                ],
            'status','url','created_at','updated_at']];
        $response->assertStatus(200)
                ->assertJsonStructure($structure);
        $this->assertCount(3,$response->json());
    }

    public function testGetListOrders(){
        $user = User::where('id',2)->firstOrFail();
        auth()->login($user);
        $response = $this->json('GET','/api/orders');
        $structure = [
            ['id',
            'user' => [
                'id','name','email','phone'
                ],
            'status','url','created_at','updated_at']];
        $response->assertStatus(200)
                ->assertJsonStructure($structure);
        $this->assertGreaterThan(2,count($response->json()));
    }
}
