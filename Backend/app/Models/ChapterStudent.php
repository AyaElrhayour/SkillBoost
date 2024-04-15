<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;use Illuminate\Database\Eloquent\Builder;

class ChapterStudent extends Model
{
    use HasFactory;

    protected $table = "chapterStudent";

    protected $fillable = [
        'finished',
        'chapter_id',
        'user_id',
    ];

    protected $hidden = [
        'updated_at',
    ];

    public function student(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function Chapter(): BelongsTo
    {
        return $this->belongsTo(Chapter::class, 'chapter_id');
    }

    protected static function booted(): void{

        static::addGlobalScope('user', function (Builder $builder) {
            $builder->where('user_id', Auth::id());
        });
    }
}
