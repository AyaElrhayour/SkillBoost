<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ChapterStudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('courses', CourseController::class);

Route::apiResource('chapters', ChapterController::class);

Route::apiResource('chapterstudent', ChapterStudentController::class);

Route::apiResource('posts', PostController::class);

Route::apiResource('comments', CommentController::class);

Route::get('topics', [TopicController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('topics', TopicController::class)->middleware('restrictRole:Admin')->except('index');
});

