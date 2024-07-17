<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CustomerServices;
use App\Http\Requests\CreateCustomerRequest;
use App\Http\Requests\UpdatecustomerRequest;
use App\Http\Requests\DeleteCustomerRequest;

class CustomerController extends Controller
{
    public function index() {
        return view('customers');
    }

    public function create(CreateCustomerRequest $request, CustomerServices $cs) {
        $cs->create($request);

        return response()->json(['message' => 'success']);
    }

    public function read(Request $request, CustomerServices $cs) {
        return response()->json(['data' => $cs->read($request)]);
    } 

    public function update(UpdatecustomerRequest $request, CustomerServices $cs) {
        $cs->update($request);

        return response()->json(['message' => 'success']);
    }

    public function delete(DeleteCustomerRequest $request, CustomerServices $cs) {
        $cs->delete($request);

        return response()->json(['message' => 'success']);
    }
}
