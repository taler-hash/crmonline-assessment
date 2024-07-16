<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerServices;
use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    private  CustomerServices $cs;

    public function index() {

    }

    public function create(CreateCustomerRequest $request) {

    }

    public function read(Request $request) {

    } 

    public function update() {

    }

    public function delete() {

    }
}
