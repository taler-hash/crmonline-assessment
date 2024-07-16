<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerServices;
use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    public function index() {

    }

    public function create(CreateCustomerRequest $request, CustomerServices $cs) {
        $cs->create($request);

        return response()->json(['message' => 'success']);
    }

    public function read(Request $request, CustomerServices $cs) {
        $cs->read($request);
    } 

    public function update(CustomerServices $cs) {
        $cs->update();
    }

    public function delete(CustomerServices $cs) {
        $cs->delete();
    }
}
