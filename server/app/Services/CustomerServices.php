<?php 

namespace App\Services;

use Illuminate\Http\Request;
use App\Http\Requests\CreateCustomerRequest;
use App\Models\Customer;
use Illuminate\Pagination\LengthAwarePaginator;

class CustomerServices {    
    /**
     * create
     *
     * @param  CreateCustomerRequest $request
     * @return void
     */
    
    public function create(CreateCustomerRequest $request): void {
        Customer::create($request->all());
    }
    
    /**
     * read
     *
     * @param  Request $request
     * @return Customer
     */
    public function read(Request $request): LengthAwarePaginator {

        return Customer::when(!empty($request->searchstring), function($q) use ($request) {
            return $q->where('first_name', $request->searchstring)
            ->orWhere('last_name', $request->searchstring)
            ->orWhere('email_address', $request->searchstring)
            ->orWhere('contact_number', $request->searchstring);
        })->orderBy('id', 'desc')->paginate(10);
    }
    
    /**
     * update
     *
     * @param  mixed $request
     * @return mixed
     */
    
    public function update(Request $request): void {
        Customer::find($request->id)->update($request->except('id'));
    }

    public function delete(Request $request): void {
        Customer::find($request->id)->delete();
    }
}