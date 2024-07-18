<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CustomerTest extends TestCase
{
    
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_create_operation(): void
    {
        $response = $this->json('POST','/api/customer/create', [
            'first_name' => 'jurie',
            'last_name' => 'pedrogas',
            'contact_number' => '0991233',
            'email_address' => 'jurie@gmail.com'
        ]);

        $response->assertStatus(200);
    }

    public function test_read_operation(): void
    {
        $response = $this->json('GET', '/api/customers', [
            'page' => 1,
            'searchstring' => ''
        ]);

        $response->assertStatus(200);
    }

    public function test_update_operation_with_existed_data() : void
    {
        $response = $this->json('POST', '/api/customer/update', [
            'first_name' => 'jurie tylier',
            'last_name' => 'pedrogas',
            'contact_number' => '0991233',
            'email_address' => 'jurie@gmail.com'
        ]);

        $response->assertStatus(200);
    }

    public function test_delete_operation_with_not_existed_id(): void
    {
        $response = $this->json('POST', 'api/customer/delete', [
            'id' => 999
        ]);

        $response->assertStatus(422);
    }

}
