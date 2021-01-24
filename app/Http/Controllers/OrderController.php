<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        $orders = Order::get();
        return response()->json($orders->load('user'),200);
    }
    public function show(Request $request){
        $order = Order::where('request_id',$request->request_id)->firstOrFail();
        return response()->json($order->load('user'),200);
    }

    public function getOrderUser(Request $request){
        $orders = Order::where('user_id',$request->user_id)->get();
        return response()->json($orders->load('user'),200);
    }

    public function store(Request $request){
        $order = Order::create([
            'user_id' => $request->user_id,
            'status' => 'CREATED',
            'request_id' => $request->request_id,
            'url'=> $request->url
        ]);
        return response()->json($order->load('user'),201);
    }

    public function urlReturn(Request $request){
        $response = $request;
        dd($response);
    }
}
