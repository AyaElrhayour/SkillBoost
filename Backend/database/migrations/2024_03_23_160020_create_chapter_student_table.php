<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chapter_student', function (Blueprint $table) {
            $table->id();
            $table->boolean("finished")->default(false);
            $table->foreignId("user_id")
                ->constrained("users")
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId("chapter_id")
                ->constrained("chapters")
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapter_student');
    }
};
