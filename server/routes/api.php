<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::controller(CustomerController::class)
->group(function() {
    Route::post('customer/create', 'create');
    Route::get('customers', 'read');
    Route::post('customer/update', 'update');
    Route::post('customer/delete', 'delete');
});
