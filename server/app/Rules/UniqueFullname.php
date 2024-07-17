<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Customer;


class UniqueFullname implements ValidationRule
{

    public $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $isExisted = Customer::where(['first_name' => $this->request->first_name, 'last_name' => $this->request->last_name])->exists();

        if($isExisted) {
            $fail('Customer is already Existed.');
         }
    }
}
