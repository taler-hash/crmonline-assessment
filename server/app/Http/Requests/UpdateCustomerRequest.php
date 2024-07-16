<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\WhereNotInUniqueFullname;

class UpdatecustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {   
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required',
            'last_name' => ['required', new WhereNotInUniqueFullname($this)],
            'email_address' => "required|email|unique:customers,email_address,$this->id",
            'contact_number' => 'numeric|unique:customers,contact_number'
        ];
    }
}
