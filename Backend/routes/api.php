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
use App\Http\Controllers\UserController;

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
Route::put('posts/{post}/approve', [PostController::class, 'approvePost']);

Route::apiResource('comments', CommentController::class);
Route::get('/teachers', [UserController::class, 'getTeachers']);
Route::get('/students', [UserController::class, 'getStudents']);
Route::get('/courses/level/{level}', [CourseController::class, 'getByLevel']);
Route::get('/courses/topic/{topic_id}', [CourseController::class, 'getByTopic']);

Route::get('/courses/search?{query?}', [CourseController::class, 'search']);

Route::get('topics', [TopicController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('topics', TopicController::class)->middleware('restrictRole:Admin')->except('index');
});

