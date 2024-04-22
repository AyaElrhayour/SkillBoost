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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->enum('level', ['Beginner', 'Intermediate', 'Advanced', 'proficient']);
            $table->string('cover');
            $table->boolean("approved")->default(false);
            $table->foreignId("topic_id")
                ->constrained("topics")
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId("user_id")
                ->constrained("users")
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
        //
    }
};
