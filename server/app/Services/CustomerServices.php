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
        $perPage = $request->filterBy?->paginate ?? 10;

        return Customer::orWhere($request->except('filterBy'))->orderBy('id', 'desc')->paginate($perPage);
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