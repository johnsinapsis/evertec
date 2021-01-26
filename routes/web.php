<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //return redirect('home');
    return view('welcome2');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/home/buy', 'HomeController@index');
Route::get('/home/detail/{id}', 'HomeController@indexDetail');
Route::get('/home/orders_list', 'HomeController@index');
Route::get('/home/user/orders', 'HomeController@index');

Route::post('/order','OrderController@show')->middleware(['auth']);
Route::post('/order_user','OrderController@getOrderUser')->middleware(['auth']);
Route::get('/orders','OrderController@index')->middleware(['auth']);
Route::post('/create_order','OrderController@store')->middleware(['auth']);
Route::post('/update_order','OrderController@update')->middleware(['auth']);
Route::post('/detail','OrderController@urlReturn');
