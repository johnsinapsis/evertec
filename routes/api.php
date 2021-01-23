<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::post('/order','OrderController@show')->middleware(['auth']);
Route::post('/order_user','OrderController@getOrderUser')->middleware(['auth']);
Route::get('/orders','OrderController@index')->middleware(['auth']);
Route::post('/create_order','OrderController@store')->middleware(['auth']);
Route::post('/detail','OrderController@urlReturn');
