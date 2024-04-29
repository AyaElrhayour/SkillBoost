<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Comment extends Model
{
    use HasFactory;
    protected $table = "comments";

    protected $fillable = [
        'content',
        'post_id',
        'user_id',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    // protected static function booted(): void{

    //     static::addGlobalScope('user', function (Builder $builder) {
    //         $builder->where('user_id', Auth::id());
    //     });
    // }
}
