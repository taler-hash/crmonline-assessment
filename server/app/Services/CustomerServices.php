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
    
    public function create(CreateCustomerRequest $request): Customer {
        return Customer::create($request->all());
    }
    
    /**
     * read
     *
     * @param  Request $request
     * @return Customer
     */
    public function read(Request $request): Customer {
        $perPage = $request->filterBy?->paginate ?? 10;

        return Customer::orWhere($request->except('filterBy'))->paginate($perPage);
    }

    public function update(Request $request): mixed {
        $customer = Customer::where('id', $request->id);
        $customer->update($request->except('id'));

        return $customer;
    }

    public function delete() {
        
    }
}