<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;
    protected $table = "courses";

    protected $fillable = [
        'title',
        'description',
        'level',
        'cover',
        'topic_id',
        'user_id',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function topic(): BelongsTo
    {
        return $this->belongsTo(Topic::class, 'topic_id');
    }

    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class);
    }
    // protected static function booted(): void{

    //     static::addGlobalScope('user', function (Builder $builder) {
    //         $builder->where('user_id', Auth::id());
    //     });
    // }
}
