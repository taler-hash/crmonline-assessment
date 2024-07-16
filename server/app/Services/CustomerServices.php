<?php 

namespace App\Services;

use App\Http\Requests\CreateCustomerRequest;
use App\Models\Customer;

class CustomerServices {    
    /**
     * create
     *
     * @param  CreateCustomerRequest $request
     * @return void
     */
    
    public function create(CreateCustomerRequest $request) {
        Customer::create($request->all());
    }

    public function read() {

    }

    public function update() {

    }

    public function delete() {
        
    }
}