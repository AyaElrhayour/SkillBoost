<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Topic extends Model
{
    use HasFactory;
    protected $table = "topics";

    protected $fillable = [
        'name',
        'description' ,
    ];

    protected $hidden =[
        'updated_at',  
    ];

    public function courses(): HasMany 
    {
        return $this->hasMany(Course::class, 'user_id');
    }
}
