<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Chapter extends Model
{
    use HasFactory;

    protected $table = "chapters";

    protected $fillable = [
        'title',
        'content',
        'course_id',
        'attachment',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'topic_id');
    }

    // protected static function booted(): void{

    //     static::addGlobalScope('user', function (Builder $builder) {
    //         $builder->where('user_id', Auth::id());
    //     });
    // }
}
