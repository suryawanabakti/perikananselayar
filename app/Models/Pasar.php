<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pasar extends Model
{
    protected $guarded = ['id'];

    public $table = 'pasar';

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
