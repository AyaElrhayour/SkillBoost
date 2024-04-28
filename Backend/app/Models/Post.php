<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory;
    protected $table = "posts";
    protected $fillable = [
        'title',
        'content',
        'approved',
        'user_id',
        'topic_id',
        'img'
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function topic(): BelongsTo
    {
        return $this->belongsTo(Topic::class, 'topic_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    // protected static function booted(): void{

    //     static::addGlobalScope('user', function (Builder $builder) {
    //         $builder->where('user_id', Auth::id());
    //     });
    // }
}
