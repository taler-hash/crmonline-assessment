<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerServices;
use App\Http\Requests\CreateCustomerRequest;
use App\Http\Requests\UpdatecustomerRequest;

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

    public function update(UpdatecustomerRequest $request, CustomerServices $cs) {
        $customer = $cs->update($request);

        return response()->json(['message' => 'success', 'data' => $customer]);
    }

    public function delete(CustomerServices $cs) {
        $cs->delete();
    }
}
