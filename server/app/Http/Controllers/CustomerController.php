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
        $customer = $cs->create($request);

        return response()->json(['message' => 'success', 'data' => $customer]);
    }

    public function read(Request $request, CustomerServices $cs) {
        $customers = $cs->read($request);

        return response()->json(['data' => $customers]);
    } 

    public function update(CustomerServices $cs) {
        $cs->update();
    }

    public function delete(CustomerServices $cs) {
        $cs->delete();
    }
}
