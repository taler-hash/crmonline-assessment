<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::controller(CustomerController::class)
->group(function() {
    Route::post('/create', 'create');
    Route::post('/read', 'read');
    Route::post('/update', 'update');
    Route::post('/delete', 'delete');
});
