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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->string('img');
            $table->boolean("approved")->default(false);
            $table->timestamps();
            $table->foreignId("topic_id")
                ->constrained("topics")
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
            $table->foreignId("user_id")
                ->constrained("users")
                ->cascadeOnUpdate()
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
