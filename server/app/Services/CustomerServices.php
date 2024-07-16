<?php 

namespace App\Services;

use Illuminate\Http\Request;
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
    
    /**
     * read
     *
     * @param  Request $request
     * @return Customer
     */
    public function read(Request $request) {
        $perPage = $request->filterBy?->paginate ?? 10;
        
        return Customer::orWhere($request->except('filterBy'))->paginate($perPage);
    }

    public function update() {

    }

    public function delete() {
        
    }
}