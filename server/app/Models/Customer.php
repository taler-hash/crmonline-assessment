<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'customers';

    protected $appends = ['full_name'];

    protected $fillable = [
        'first_name',
        'last_name',
        'email_address',
        'contact_number'
    ];

    public function getFullNameAttribute() {
        return "{$this->first_name} {$this->last_name}";
    }
}
